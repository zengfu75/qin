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
        <el-form-item class="w500" label="下单时间">
        <el-date-picker
            v-model="filterForm.startDate"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </el-date-picker>
          -
          <el-date-picker
            v-model="filterForm.endDate"
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
          prop="status"
          width="cals(100%/3)"
          label="状态"/>
        <el-table-column
          prop="count"
          width="cals(100%/3)"
          label="数量">
            <template slot-scope="scope">
              <span @click="routerPath(scope.row)" class="listToDetail">{{scope.row.count}}</span>
            </template>
          </el-table-column>
        <el-table-column
          prop="par"
          width="cals(100%/3)"
          label="占比"/> 
      </el-table>
    </div>
  </div>

</template>

<script>
export default {
  name:"logisticList",
  data(){
    return {
      filterForm:{
        value9:["2019-01-02","2019-08-01"],
        accountNo:'6105351003',
        platForm:'',
        endDate:"2019-12-09",
        startDate:"2019-12-09",
        LogisticsType:"yd"
      },
      Logistics:[],
      account:[],
      options:[],
      tableData: [{
          status: '已发货未揽收',
          par: '10.00%',
          count: '1000'
        }, {
          status: '已揽收未中转',
          par: '5.00%',
          count: '500'
        },{
          status: '已中转未派送',
          par: '20.00%',
          count: '2000'
        },{
          status: '已派送未签收',
          par: '35.00%',
          count: '3500'
        },{
          status: '已签收',
          par: '5.00%',
          count: '500'
        },{
          status: '线路包裹超时',
          par: '10.00%',
          count: '1000'
        },{
          status: '派签超三日',
          par: '15.00%',
          count: '1500'
        }]
    }
  },
  methods:{
    routerPath(column){
      this.$store.state.detailType = column.type || "";
      this.$router.push("/page/wldetail");
    },
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
  .listToDetail{
    color: #0000ee;
    cursor: pointer;
  }
</style>