<template>
  <div>
    <el-form ref="filterForm" :model="filterForm" label-width="132px"> 
      <el-form-item  prop="LogisticsType" label="物流公司">
        <el-select v-model="filterForm.LogisticsType" placeholder="请选择">
          <el-option
            v-for="item in Logistics"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      
      
      <el-form-item prop="filterForm.data" label="下单时间">
       <el-date-picker
          v-model="filterForm.date.start"
          type="date"
          placeholder="选择日期"
          default-value="2010-10-01">
        </el-date-picker>
        -
        <el-date-picker
          v-model="filterForm.date.end"
          type="date"
          placeholder="选择日期"
          default-value="2010-10-01">
        </el-date-picker>
      </el-form-item>
      <el-form-item  prop="platForm" label="平台">
        <el-select v-model="filterForm.platForm" placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  prop="accountNo" label="客户名称(编码)">
        <el-select v-model="filterForm.accountNo" placeholder="不限">
          <el-option
            v-for="item in account"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name:"filter",
  data(){
    return {
      filterForm:{
        value9:["2019-01-02","2019-08-01"],
        accountNo:'6105351003',
        platForm:'',
        date:{
          start:"2019-08-09",
          end:"2019-12-09"
        },
        LogisticsType:"yd"
      },
      Logistics:[],
      account:[],
      options:[],
    }
  },
  created(){
    this.Logistics = this.$store.state.Logistics||[];
    this.account = this.$store.state.account||[];
  }
}
</script>
<style scoped lang="less">

</style>