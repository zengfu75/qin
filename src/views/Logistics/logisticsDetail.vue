<template>
  <div>
    <el-form :inline="true" ref="filterForm" :model="filterForm" label-width="110px" class="waybillForm"> 
        <el-form-item label="运单号">
          <el-input v-model="filterForm.shipNo" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item  prop="logisticsCode" label="物流公司">
          <el-select v-model="filterForm.LogisticsType" placeholder="请选择">
            <el-option
              v-for="item in Logistics"
              :key="item.value"
              :label="item.text"
              :value="item.value">
            </el-option>
          </el-select>
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
        <el-form-item label="发货日期">
          <el-date-picker
            v-model="filterForm.orderDateStart"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </el-date-picker>
          -
          <el-date-picker
            v-model="filterForm.orderDateEnd"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </el-date-picker>
        </el-form-item>
        <el-button type="submit" size="large">查询</el-button>
        <el-button size="large">重置</el-button>
        <el-button size="large">导出</el-button>
        <el-button size="large">下载模板</el-button>
        <el-button size="large">导入</el-button>
    </el-form>
    <div class="tabMain">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        maxHeight="540px"
        tooltip-effect="dark"
        style="maxWidth:100%"
        @sort-change="handleSortChange"
        >
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="shipNo"
          label="运单号"
          width="130">
          <template slot-scope="scope">
            <a :href="'http://ykjcx.yundasys.com:1602/wsd/ykjcx/cxend.jsp?wen='+scope.row.shipNo"
              target="_blank"
              class="buttonText">{{scope.row.shipNo}}</a>
          </template>
          
        </el-table-column>
        <el-table-column
          prop="branchCode"
          label="客户名称(编码)"
          width="160">
        </el-table-column>
        <el-table-column
          prop="orderNo"
          label="订单号"
          width="160px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="orderDate"
          label="下单日期"
          sortable
          width="150px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="shipmentDate"
          label="发货日期"
          sortable
          width="150px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="logisticsCode"
          label="快递公司"
          width="100px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="platform"
          label="平台"
          width="100px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="originProvince"
          label="始发省份"
          width="100px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="receivedProvince"
          label="目的省份"
          width="100px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="录入时间"
          sortable
          width="150px"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="weight"
          label="重量"
          width="100px"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSize"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"/>
    </div>
  </div>

</template>

<script>
// import Table from "@c/table.vue"
export default {
  name:"logisticList",
  data(){
    return {
      filterForm:{
        orderDate:{
          orderDateStart:"2019-08-09",
          orderDateEnd:"2019-12-09"
        },
        ship:{
          shipmentDateEnd:"",
          shipmentDateStart:""
        },
        create:{
          createTimeStartEnd:"",
          createTimeStart:""
        },
        prov:{
          receivedProvince:"",
          originProvince:""
        },
        shipNo:"",//运单号
        logisticsCode:"yd",  //物流公司
        orderDateStart:"", //下单开始日期
        orderDateEnd:"",//下单结束日期
        shipmentDateEnd:"", //发货截止日
        shipmentDateStart:"",//发货开始日
        createTimeStartEnd:"", //录入截止日
        createTimeStart:"",//录入开始日
        receivedProvince:"",  //目的省份
        originProvince:"",    //始发省份
        platform:"",//平台
        vipAccount:"6105351003"//客户名称
      },
      Logistics:[],
      account:[],
      options:[],
      column:[],
      setStatus:{},
      tableData: [{
          shipNo: '3103031132966',
          branchCode:"branchCode",
          weight:"100kg",
          createTime:"2019-08-06",
          receivedProvince:"handleDateChange",
          originProvince:"新疆维吾尔自治区",
          platform:"平台",
          logisticsCode:"韵达",
          shipmentDate:"2019-06-05",
          orderDate:"2019-06-05",
          orderNo:"201906050878"
        }],
        multipleSelection: [],
        currentPage:1,
        pageSize:[10,20,30,40],
        size:10,
        total:100,
    }
  },
  methods:{
      handleSortChange(column){   //页面数据
      console.log(column)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  updated(){
  },
  created(){
    this.Logistics = this.$store.state.Logistics||[];
    this.account = this.$store.state.account||[];
  }
}
</script>
<style scoped lang="less">
.waybillForm{
  margin-left: -40px;
}
</style>