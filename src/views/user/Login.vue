<template>
		<div class="login_right">
			<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login_modle">
				<div class="login_title">供应链协同平台（SCCP）</div>
					<el-form-item prop="account" label-width="0" :error="errorForm.account">
						<el-input v-model="form.account" placeholder="账号" />
					</el-form-item>
					<el-form-item prop="password" label-width="0" :error="errorForm.account">
						<el-input type="password" placeholder="密码" v-model="form.password" auto-complete="off"></el-input>
					</el-form-item>
					<el-button type="warning" size="medium" @click="login('ruleForm')">提交</el-button>
				</el-form>
		</div>
</template>


<script>
import api from "@/utils/api";
export default {
	name: "login",
	components: {},
	data() {
		return {
			form: {
				account: "",
				password: ""
			},
			rules: {
				account: [
					{ required: true, message: "请输入账号", trigger: "blur" },
					{
            validator:this.checkPhone,
						trigger: ["blur","change"]
					}
				],
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{
            validator:this.checkpwd,
						trigger: ["blur","change"]
					}
				]
			},
			errorForm:{
				account:"",
				password:"",
			}
		}
	},
	methods: {
    checkPhone(rule,value,callback){
      const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
      if(!value){
        callback();
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
		},
		checkpwd(rule,value,callback){
			let reg=/^[\u2E80-\u9FFF]+$/;//Unicode编码中的汉字范围
      if(!value){
        callback();
      }
      if (reg.test(value)) {
        callback(new Error("密码不能包含汉字"))
      } else if(value.length<6){
        callback(new Error("密码不能少于六位"))
      }else{
				callback();
			}
		},
		login(formName){
			const _self = this;
			this.$refs[formName].validate((valid) => {
          if (valid) {
						let password = _self.$md5(_self.form.password)
            api.login({
							...this.form,
							password
						})
          } else {
            return false;
          }
        });
			
		}
  },
	created() {}
};
</script>

<style scoped lang="less">
	.login_right{
		position: relative;
		margin-left: 55.05%;
		padding-right: 50px;
		height: 100%;
		
		.login_modle{
			background-color: @loginBgColor;
			position: absolute;
			top: 50%;
			margin-top: -170px;
			width: 432px;
			height: 340px;
			right: 50px;
			padding: 30px;
			box-sizing: border-box;
			.login_title{
				font-size:22px;
				font-family:Microsoft YaHei;
				font-weight:bold;
				color:@loginTitleColor;
				line-height:49px;
				text-align: center;
				margin-bottom: 36px;
			}
			.el-button{
				width: 100%;
				height: 43px;
				background:@loginButtonColor;
				border-radius:4px;
				font-size:16px;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
			}
		}
	}
/* .login_bg{
    background: url(bg) center;
    background-size: cover;
  } */
</style>