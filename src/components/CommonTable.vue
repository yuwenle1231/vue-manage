<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%">
        <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item" >
            
        </el-table-column>
    </el-table>

  </div>
</template>

<script>
    export default {
        name:'CommonTable',
        data() {
            return {
                
            }
        },
        props:{
            tableData:Array,
            tableLabel:Array
        }
    }
</script>

<style>

</style>