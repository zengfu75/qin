<template>
  <div>
    <el-form class="clearfix" ref="filterForm" :model="filterForm" label-width="121px"> 
      <div class="_listSearch fl">
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
        <el-form-item class="w500" prop="filterForm.data" label="下单时间">
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
      </div>
      <div class="btnWrap fl">
          <el-button type="submit" size="large">查询</el-button>
          <el-button size="large">重置</el-button>
      </div>
    </el-form>
    <div class="tabMain">
      <el-table
      :data="tableData"
      border
      style="width: 100%;minWidth:640px;">
        <el-table-column
          prop="date"
          label="状态"/>
        <el-table-column
          prop="name"
          label="数量"/>
        <el-table-column
          prop="address"
          label="占比"/> 
      </el-table>
    </div>
  </div>

</template>

<script>
// import Table from "@c/table.vue"
import Vue from "vue"
export default {
  name:"logisticList",
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
      column:[],
      setStatus:{},
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  updated(){
    let column=[
      {
        title:"状态",
        width:"180px",
        key:"date"
      },
      {
        title:"数量",
        key:"name",
        width:"180px"
      },
      {
        title:"占比",
        key:"address",
        width:""
      }
    ];
    Vue.set(this.column,column)
  },
  created(){
    this.Logistics = this.$store.state.Logistics||[];
    this.account = this.$store.state.account||[];
  }
}
</script>
<style scoped lang="less">
  ._listSearch{
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
    .el-input__inner{
      width: 178px;
    }
    .el-form-item{
      .el-input__inner{
        width: 178px
      }
    }
  }
</style>