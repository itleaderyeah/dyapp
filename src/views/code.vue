<template>
	<div class="sign">
		<div class="sign-header">
			<router-link to="/tpsign" tag="span" class="icon">&lt;
			</router-link>
			<span class="help">帮助</span>
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>请输入验证码</h2>
				<span>验证码已通过短信发送至186xxxxxxx</span>
			</div>
			<div class="sign-box">
				<div class="inp">
					<input placeholder="请输入验证码" class="inp-control" 
					@input="changeCode" v-model="code">
				</div>
				<div class="sele">{{time}}</div>
			</div>
			<div class="code-btn">
				<button :disabled="disabled" :class="[btnBg?'active':'']" class="load-btn">
					<span class="loads" v-if="loading"></span>
					登录
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Code',
	data () {
		return {
			time: 60,
			code: '',
			disabled: true,
			btnBg: false,
			loading: false
		}
	},
	created () {
		this.getCode()
		this.timer()
	},
	methods: {
		getCode () {
			this.codes = '1234'
		},
		changeCode (e) {
			this.code = e.target.value
			if (this.code == this.codes) {
				this.disabled = false
				this.btnBg = true
				this.loading = true
				setTimeout(() => {
					this.$router.push('/me')
				},1e3)
			}
			else {
				console.log('验证码有误')
			}
		},
		// 倒计时
		timer () {
			if (this.time > 0) {
				this.time--
				setTimeout(this.timer,1e3)
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
.des span {
	color: #666;
	font-size: 14px;
}
.sign-box {
	margin-top: 10px;
	display: flex;
	height: 50px;
	align-items: center;
}
.sele {
	width: 60px;
	height: 36px;
	line-height: 36px;
	text-align: right;
	background: #f9f9f9;
}
.inp-control {
	background: #f9f9f9;
	width: 100%;
	height: 36px;
	border: none;
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
input {
	caret-color: #fe2cc5;
}
input::webkit-input-placeholder {
	color: #ccc;
}
.load-btn {
	display: flex;
	justify-content: center;
}
.loads {
	display: block;
	width: 14px;
	height: 14px;
	margin-right: 5px;
	border: 3px solid #fff;
	color: #000;
	border-bottom: 3px solid #ccc;
	border-radius: 50%;
	animation: load 1s infinite linear;
}
@keyframes load {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>