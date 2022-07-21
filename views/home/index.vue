<template>
  <div>
    <!-- gutter	栅格间隔 -->
    <el-row class="home" :gutter="20" style="margin-top: 20px">
      <!-- span	栅格占据的列数 列  列  -->
      <el-col :span="8">
        <!-- 通过shadow属性设置卡片阴影出现的时机：always、hover或never -->
        <el-card shadow="hover">
          <!-- 这些类都是写好了的，在main.js里面全局引入了的 -->
          <div class="user">
            <img :src="userImg" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间: <span>2022-7-21</span></p>
            <p>上次登录地点: <span>成都</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <!-- el-table元素中注入data对象数组 -->
          <el-table :data="tableData">
            <!-- 在el-table-column中用prop属性来对应  对象数组中的键名  即可填入数据，用label属性来定义表格的列名 -->
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="">
        <div class="num">
          <!-- body-style	设置 body 的样式	object	—	{ padding: '20px' } -->
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: '0' }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="num">￥{{ item.value }}</p>
              <p class="txt">{{ item.name }}}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 250px">
          <div style="height: 250px" ref="echarts"></div>
        </el-card>
        <div class="graph">
          <el-card style="height: 295px">
            <div style="height:280px" ref="userEcharts"></div>
          </el-card>
          <el-card style="height: 295px">
            <div style="height:280px" ref="videoEcharts"></div>            
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getData} from '../../api/data.js'
//引入echarts
import * as echarts from 'echarts';
export default {
    name:'Home',
    data() {
      return {
        userImg:require('@/assets/images/user.png'),
        tableData:[
          // {
          //   name: 'oppo',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // },
          // {
          //   name: 'vivo',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // },
          // {
          //   name: '苹果',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // },
          // {
          //   name: '小米',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // },
          // {
          //   name: '三星',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // },
          // {
          //   name: '魅族',
          //  todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800
          // }
        ],
        tableLabel:{
          name:'手机',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          totalBuy:'总购买'
        },
        countData:[
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        ],
      }
    },
    mounted() {
      //通过mock实现  将tableData变为空数组
      getData().then(res => {
        const {code , data} = res.data
        if(code===20000){
          //通过接口拿到数据
          this.tableData = data.tableData //表格table数据

          const order = data.orderData
          const xData = order.date
          const keyArray = Object.keys(order.data[0])
          const series = []
          keyArray.forEach(key =>{
            // serise接收数组
            series.push({
              name:key,//展示图例的名称
              // map方法？？？ 
              data:order.data.map(item => item[key]),//当前图例所需要显示的数据
              type:'line' //展示图例的状态（折现图，饼状图）
            })
          })
          // 指定图表的配置项和数据
          const option = {
            // x轴
            xAxis:{
              data:xData
            },
            // y轴`
            yAxis:{},
            legend:{
              data:keyArray
            },
            series
        }
        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)


        //用户图 柱状图
        const userOptin ={
              legend: {
                // 图例文字颜色
                textStyle: {
                  color: "#333",
                },
              },
              grid: {
                left: "20%",
              },
              // 提示框
              tooltip: {
                trigger: "axis",
              },
              xAxis: {
                type: "category", // 类目轴
                data: data.userData.map(item => item.date),
                axisLine: {
                  lineStyle: {
                    color: "#17b3a3",
                  },
                },
                axisLabel: {
                  interval: 0,
                  color: "#333",
                },
              },
              yAxis: [
                {
                  type: "value",
                  axisLine: {
                    lineStyle: {
                      color: "#17b3a3",
                    },
                  },
                },
              ],
              color: ["#2ec7c9", "#b6a2de"],
              series: [
                {
                name:'新增用户',
                data:data.userData.map(item => item.new),
                type:'bar'
                },
                {
                name:'活跃用户',
                data:data.userData.map(item => item.active),
                type:'bar'
                }
              ],
            }
          const U = echarts.init(this.$refs.userEcharts)
          U.setOption(userOptin)
        //饼图
          const videoOptin = {
              title:{
                 text: 'Real Data' ,
                 left: 'center'
              },
              tooltip: {
                trigger: "item",
              },
              color: [
                "#0f78f4",
                "#dd536b",
                "#9462e5",
                "#a6a6a6",
                "#e1bb22",
                "#39c362",
                "#3ed1cf",
              ],
              series: [
                {
                  data:data.videoData,
                  type:'pie',
                  // radius: '50%',
                }
              ],
            }
            const V = echarts.init(this.$refs.videoEcharts)
            V.setOption(videoOptin)
        }
      })
    },
}
</script>

<style>
</style>