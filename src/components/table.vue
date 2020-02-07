<template>
      <el-table
      :data="tableData"
      style="width: 100%;minWidth:640px;">
        <el-table-column
          v-for="(item,key) in column"
          :prop="item.key"
          :key="key"
          :label="item.title"/>
        
      </el-table>

</template>

<script>
export default {
  name:"Table",
  props:{
    tableData:Array,
    column:Array,
    setStatus:Object
  },
  data(){
    return {
    }
  },
  mounted(){
    console.log(this.column);
  },
  created(){
  },
  watch:{
    column:{
      handler(newValue,oldValue){
        if(JSON.stringify(oldValue)!=JSON.stringify(newValue)){
          
          console.log(this.column,newValue,'??????????????>>>>>>>>>>');
          this.column = newValue;
        }
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="less">

</style>