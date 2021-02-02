<template>
	<div class="sign">
		<div class="sign-header">
			<router-link to="/sign" tag="span" class="icon">&lt;</router-link>
			<span class="help">帮助</span>
		</div>
		<div class="des">
			<h2>手机号密码登录</h2>
		</div>
		<div class="sign-content">
			<div class="sign-box">
				<div class="sele">
					<select class="sele-control" v-model="telArea">
						<option value="">+86</option>
					</select>
				</div>
				<div class="inp">
					<input placeholder="请输入手机号码" class="inp-control" 
					v-model="phone" @keyup="loginAction">
				</div>
			</div>
			<div class="sign-box">
				<div class="inp">
					<input type="password" placeholder="请输入密码" 
					class="inpass-control" v-model="password" @keyup="loginAction">
				</div>
			</div>
			<div class="des">
				<span>登录即表明同意
					<a href="javascript:;">抖音协议</a>和
					<a href="javascript:;">隐私政策</a></span>
			</div>
			<div class="code-btn">
				<button :disabled="disabled" :class="[btnBg?'active':'']" 
				@click="loginEvent">登录</button>
			</div>
			<div class="other">
				<span>忘记了？</span>&nbsp;&nbsp;
				<a href="javascript:;">找回密码</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sign',
	data () {
		return {
			telArea: '',
			phone: '',
			password: '',
			disabled: true,
			btnBg: false
		}
	},
	methods: {
		loginAction () {
			let reg = /^1[345789]{1}\d{9}$/
			let rege = /\d{6,8}/
			if (this.phone.trim().length==0 || this.phone.trim().length==0) {
				// 提示信息
				this.$toast({
					message: '请填写手机号和密码',
					type: 'error',
					duration: 3000
				})
				return
			}
			if (reg.test(this.phone) && rege.test(this.password)) {
				this.disabled = false
				this.btnBg = true
			}
		},
		loginEvent () {
			if (this.btnBg) {
				setTimeout(() => {
					this.$router.push('/code')
				},1e3)
			}
			else {
				// 提示信息
				this.$toast({
					message: '请输入正确的手机号和密码',
					type: 'error',
					duration: 3000
				})
			}
		}
	}
}
</script>

<style scoped>
.sign {
	padding: 30px;
}
.sign-headers {
	display: flex;
	justify-content: space-between;
}
.sign-header {
	font-size: 30px;
}
.sign-header .help {
	font-size: 20px;
	float: right;
	margin-top: 6px;
}
.sign-content {
	padding: 40px;
}
.des h2 {
	font-size: 24px;
	font-weight: bold;
	padding-left: 40px;
	margin-top: 30px;
}
.des p {
	line-height: 50px;
	color: #666;
}
.des p a {
	color: #628db8;
	padding: 0 5px;
}
.sign-box {
	display: flex;
	height: 50px;
	align-items: center;
	margin-top: -20px;
	padding-bottom: 10px;
}
.sign-box:first-child {
	margin-left: -5px;
}
.sign-box:nth-child(2) {
	margin-top: 0;
}
.sele-control {
	background: #f9f9f9;
	height: 36px;
	font-weight: bold;
	margin-left: 5px;
	border: none;
}
.inpass-control {
	width: 225px;
	background: #f9f9f9;
	height: 36px;
	border: none;
	text-indent: 0.5em;
}
.inp-control {
	background: #f9f9f9;
	height: 36px;
	margin-left: 10px;
	border: none;
}
input {
	caret-color: #fe2cc5;
}
input::webkit-input-placeholder {
	color: #ccc;
}
.not-sign p {
	color: #ccc;
	font-size: 14px;
	margin-top: 10px;
}
.code-btn button {
	margin: 20px 0;
	width: 82%;
	padding: 15px 0;
	border: none;
	color: #f9f9f9;
}
.code-btn .active {
	color: #fff;
	background: #fe2c55;
}
.other {
	display: flex;
}
.other a {
	color: #628db8;
}
</style>