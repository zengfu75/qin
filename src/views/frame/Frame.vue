<template>
	<div id="appWrapper">
		<el-container v-if="showSubmenu" class="_FrameWrapper clearfix">
			<el-menu
				class="fl"
				:default-active="defaultKey"
				mode="vertical"
				v-if="showSubmenu"
				@select="handleSelect"
			>
				<el-menu-item
					v-for="(item,i) in navList"
					:key="i"
					:index="item.index"
					:path="item.name"
				>{{ item.navItem }}</el-menu-item>
			</el-menu>
			<el-container class="_Framecontainer fl">
				<el-header>
					{{navTitle}}
					<div class="header-right">
						<img src class="header-img" />
						<span class="header-name">姓名</span>
						<span class="hearder-center"></span>
						<span class="header-logout" v-on:click="handleOut">退出</span>
					</div>
				</el-header>
				<el-main class="_frameMain">
					<router-view />
				</el-main>
			</el-container>
		</el-container>
		<div id="loginBg" v-if="!showSubmenu">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "login",
	components: {},
	data() {
		return {
			navList: [
				{ name: "/page/wllist", navItem: "物流监控", index: "wl" },
				{ name: "/page/ydlist", navItem: "运单管理", index: "yd" },
				{ name: "/page/khlist", navItem: "考核报表", index: "kh" },
				{ name: "/page/vlist", navItem: "VIP客户管理", index: "vip" },
				{ name: "/page/outlist", navItem: "线路超时管理", index: "out" }
			],
			pathObj: {
				wl: "/page/wllist",
				yd: "/page/ydlist",
				kh: "/page/khlist",
				vip: "/page/vlist",
				out: "/page/outlist"
			},
			navTitle: "",
			showSubmenu: true,
			defaultKey: ""
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			const { pathObj } = this;
			this.$router.push(pathObj[key]);
			console.log(key, keyPath);
		},
		handleOut() {
			console.log("退出成功");
		}
	},
	mounted() {
		// console.log(this.$store.state,"this");
	},
	created() {
		this.showSubmenu = this.$route.path.indexOf("login") > 0 ? false : true;
		this.defaultKey = this.$route.meta.defaultKey;
		this.navTitle = this.$route.meta.title;
	},
	updated() {
		this.showSubmenu = this.$route.path.indexOf("login") > 0 ? false : true;
		this.defaultKey = this.$route.meta.defaultKey;
		this.navTitle = this.$route.meta.title;
		// this.name = this.$store.state.name;
	}
};
</script>

<style lang="less" scoped>
#appWrapper {
	height: 100%;
	width: 100%;
	overflow: auto;
	._FrameWrapper {
		min-height: 100%;
		min-width: 1320px;
	}
	#loginBg {
		height: 100%;
		width: 100%;
		min-width: 960px;
		min-height: 383px;
		position: absolute;
	}
}
</style>
