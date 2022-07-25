<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户' " :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
            <el-button @click="isShow = false">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser" >新增</el-button>
      <common-form :formLabel="formLabel" :form="serchForm" :inline="true" ref="form" >
        <el-button type="primary" @click="getList(serchForm.keyword)" >搜索</el-button>
      </common-form>
      </div>
      <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser" @del="delUser"  ></common-table>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import {getUser} from '../../api/data'
export default {
    name:'User',
    data() {
      return {
        operateType:'add',
        isShow:false,
        operateFormLabel:[
                    {
                        model: 'name',
                        label: '姓名',
                        type: 'input'
                    },
                    {
                        model: 'age',
                        label: '年龄',
                        type: 'input'
                    },
                    {
                        model: 'sex',
                        label: '性别',
                        type: 'select',
                        opts: [
                            {
                                label: '男',
                                value: 1
                            },
                            {
                                label: '女',
                                value: 0
                            }
                        ]
                    },
                    {
                        model: 'birth',
                        label: '出生日期',
                        type: 'date'
                    },
                    {
                        model: 'addr',
                        label: '地址',
                        type: 'input'
                    }
                ],
        operateForm:{
          name:'',
          addr:'',
          age:'',
          birth:'',
          sex:''
        },
        formLabel:[
          {
            model:'keyword',
            label:'',
            type:'input'
          }
        ],
        serchForm:{
          keyword:''
        },
        tableData:[

        ],
        tableLabel:[
          {prop:'name',label:'姓名'},
          {prop:'age',label:'年龄'},
          {prop:'sexLabel',label:'性别'},
          {prop:'birth',label:'出生日期',width:200},
          {prop:'addr',label:'地址',width:320},
        ],
        config:{
          page:1,
          total:30
        }
      }
    },
    components:{CommonForm,CommonTable},
    methods:{
      confirm(){
        // edit 判断是哪一个对话框的title
        if(this.operateType === 'edit'){
          //用到user.js
          this.$http.post('/user/edit',this.operateForm).then(res =>{
                        console.log(res);
            this.isShow = false
            this.getList()
          })
      }else{
          this.$http.post('/user/add',this.operateForm).then(res =>{
            console.log(res);
            this.isShow = false
             this.getList()
          })
      }
      },
      addUser(){
        this.isShow = true
        this.operateType = 'add'
        this.operateForm = {
          name:'',
          addr:'',
          age:'',
          birth:'',
          sex:''
        }
      },
      delUser(row){
        this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
          confirmButtonText:'确认',
          cancelButtonText:'取消',
          type: 'warning'
        }).then(() =>{
          const id = row.id
          this.$http.post('/user/del',{
            params:{id}
          }).then(() =>{
            this.$message({
              type:'success',
              message:'删除成功'
            })
            this.getList()
          })
        })
      },
      editUser(row){
        this.operateType = 'edit'
        this.isShow = true
        this.operateForm = {...row}
      },
      getList(name = ''){
        this.config.loading = true
          name ? (this.config.page = 1) : ''
        getUser({
          page:this.config.page,
          name
        }).then(({data : res}) =>{
          this.tableData = res.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.count 
          this.config.loading = false
        })
      },
    },
    created(){
      this.getList()
    }
}
</script>

<style lang="less" scoped>
.manage-header{
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.el-form /deep/.el-form-item{
  margin:0
}

</style>