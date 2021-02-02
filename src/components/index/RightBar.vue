<template>
	<div class="right-bar">
		<ul>
			<li class="rightbar-item">
				<div class="avatar-border">
					<img src="@/static/img/xxx.jpeg" alt="img" />
					<span class="iconfont icon-jia">+</span>
				</div>
			</li>
			<li class="item-icon">
				<span class="iconfont icon-aixin"></span>
				<p>18.0w</p>
			</li>
			<li class="item-icon">
				<span class="iconfont icon-pinglun" @click="showCom($event)">
				</span>
				<p>18.0w</p>
			</li>
			<li class="item-icon">
				<span class="iconfont icon-fenxiang"></span>
				<p>18.0w</p>
			</li>
			<li class="rightbar-item">
				<div class="right-music">
					<img src="@/static/img/xxx.jpeg" alt="img" />
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'RightBar',
	props: ['showComment'],
	data () {
		return {
			
		}
	},
	methods: {
		showCom (e) {
			this.$emit("changeCom");
		}
	}
}
</script>

<style scoped>
.right-bar {
	width: 100px;
	height: 300px;
	-border: 1px solid #f00;
	position: fixed;
	right: 0;
	top: 25%;
	z-index: 999;
}
.rightbar-item {
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
}
.avatar-border {
	width: 50px;
	height: 50px;
	border: 1px solid #fff;
	border-radius: 50%;
	position: relative;
}
.avatar-border img {
	width: 49px;
	height: 49px;
	border-radius: 50%;
}
.avatar-border .icon-jia {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: absolute;
	top: 42px;
	left: 15px;
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	background: #fe2c5a;
	text-align: center;
}
.item-icon {
	height: 60px;
	text-align: center;
	padding-top: 12px;
}
.item-icon .iconfont {
	color: #fff;
	font-size: 30px;
}
.item-icon p {
	color: #fff;
	font-size: 14px;
	padding-top: 5px;
}
.right-music {
	width: 54px;
	height: 54px;
	background: #2e2e2e;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: round 4s 0s linear infinite;
}
.right-music img {
	width: 30px;
	height: 30px;
	border-radius: 50%;
}
@keyframes round {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>