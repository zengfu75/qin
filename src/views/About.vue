<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button v-on:click="showMes">message</el-button>
  </div>
</template>
<script>
import {Message} from "element-ui"
export default {
  data(){
    return {
      
    }
  },
  created(){
  },
  methods:{
    showMes(){
      Message.error("弹窗提示")
    },
  }
}
</script>
