<template>
	<div class="sign">
		<div class="sign-header">
			<span class="icon" @click="goHome">x</span>
			<span class="help">帮助</span>
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>登录后即可展示自己</h2>
				<span>登录即表明同意
					<a href="javascript:;">抖音协议</a> 和
					<a href="javascript:;">隐私政策</a></span>
			</div>
			<div class="sign-box">
				<div class="sele">
					<select class="sele-control" v-model="telArea">
						<option value="">+86</option>
					</select>
				</div>
				<div class="inp">
					<input placeholder="请输入手机号码" class="inp-control" 
					v-model="phone" @input="changeTel">
				</div>
			</div>
			<div class="not-sign">
				<p>未注册手机号验证通过后自动登录</p>
			</div>
			<div class="code-btn">
				<button :disabled="disabled" :class="[btnBg?'active':'']" @click="getCode">获取短信验证码
				</button>
			</div>
			<div class="other">
				<router-link to="/tpsign" tag="a">密码登录</router-link>
				<span @click="show">其他方式登录</span>
			</div>
		</div>
		<transition name="up">
			<div class="mask" v-if="showMask">
				<div class="oauth">
					<ul>
						<li class="oauth-item">今日头条登录</li>
						<li class="oauth-item">QQ登录</li>
						<li class="oauth-item">微信登录</li>
						<li class="oauth-item">微博登录</li>
						<li class="oauth-item" @click="close">取消</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'sign',
	data () {
		return {
			telArea: '',
			showMask: false,
			disabled: true,
			btnBg: false,
			phone: ''
		}
	},
	methods: {
		getCode () {
			this.$router.push('/code')
		},
		show () {
			this.showMask = true
		},
		close () {
			this.showMask = false
		},
		goHome () {
			this.$router.push('/')
		},
		changeTel (e) {
			this.phone = e.target.value
			let reg = /^1[345789]{1}\d{9}$/
			if (reg.test(this.phone)) {
				this.btnBg = true
				this.disabled = false
			}
			else {
				this.btnBg = false
				this.disabled = true
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
	margin-bottom: 20px;
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
	margin-top: 10px;
	display: flex;
	height: 50px;
	align-items: center;
}
.sele-control {
	background: #f9f9f9;
	height: 36px;
	font-weight: bold;
	-margin-left: 5px;
	border: none;
}
.inp-control {
	background: #f9f9f9;
	width: 100%;
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
	width: 85%;
	padding: 15px 0;
	border: none;
	color: #fff;
}
.code-btn .active {
	color: #fff;
	background: #fe2c55;
}
.other {
	display: flex;
	justify-content: space-between;
}
.other a {
	color: #628db8;
}
.mask {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	background: rgba(0,0,0,.4);
}
.oauth {
	width: 100%;
	height: 48%;
	position: absolute;
	bottom: 0;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: #fff;
	text-align: center;
}
.oauth-item {
	border-bottom: 1px solid #f5f5f5;
	line-height: 63px;
}
.up-enter-active,.up-leave-active {
	transition: all .5s;
}
.up-enter,.up-leave-to {
	opacity: 1;
	transform: translateY(100%);
} 
</style>