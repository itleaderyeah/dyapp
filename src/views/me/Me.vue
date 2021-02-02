<template>
	<div class="me">
		<div class="me-top" :style="bgPic">
			<div class="menu-box">
				<div class="menu-icon"></div>
			</div>
		</div>
		<div class="me-wrap">
			<div class="me-content">
				<div class="info">
					<img src="@/static/img/xxx.jpeg" alt="img" />
					<button class="btn" @click="goEdit">编辑资料</button>
					<button class="btn">+朋友</button>
				</div>
				<div class="des">
					<h2>爱学习的孩子</h2>
					<span>抖音号：1585946135</span>
					<p>越努力越幸运</p>
				</div>
				<div class="user-tag">
					<span>23岁</span>
					<span>中国最富垃圾场</span>
					<span>添加学校等标签</span>
				</div>
				<div class="user-tag2">
					<span><a href="javascript:;">0</a>获赞</span>
					<span><a href="javascript:;">100</a>关注</span>
					<span><a href="javascript:;">2.0w</a>+粉丝</span>
				</div>
				<div class="me-ad">好好学习，天天向上</div>
			</div>
			<div class="me-tab">
				<div class="me-navbar">
					<div class="item" @click="changeTab(0)" 
					:class="tabIndex==0?'active':''">作品3</div>
					<div class="item" @click="changeTab(1)" 
					:class="tabIndex==1?'active':''">动态3</div>
					<div class="item" @click="changeTab(2)" 
					:class="tabIndex==2?'active':''">喜欢3</div>
				</div>
				<div class="tab-wrap">
					<div class="tab-con" v-show="tabIndex==0">
						<div class="tab-img">
							<img src="@/static/img/0.jpg" alt="img" />
							<img src="@/static/img/1.jpg" alt="img" />
							<img src="@/static/img/2.jpg" alt="img" />
						</div>
					</div>
					<div class="tab-con" v-show="tabIndex==1">
						<div class="tab-img">
							<img src="@/static/img/2.jpg" alt="img" />
							<img src="@/static/img/0.jpg" alt="img" />
							<img src="@/static/img/1.jpg" alt="img" />
						</div>
					</div>
					<div class="tab-con" v-show="tabIndex==2">
						<div class="tab-img">
							<img src="@/static/img/1.jpg" alt="img" />
							<img src="@/static/img/2.jpg" alt="img" />
							<img src="@/static/img/0.jpg" alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Me',
	data () {
		return {
			bgPic: {
				backgroundImage:'url('+require('@/static/img/bq.jpg')+')',
				backgroundRepeat:'no-repeat',
				backgroundSize:'100% 100%'
			},
			tabIndex: 0
		}
	},
	methods: {
		changeTab (v) {
			this.tabIndex = v
		},
		goEdit () {
			this.$router.push('/edit')
		}
	}
}
</script>

<style scoped>
.me {
	position: relative;
}
.me-top {
	height: 160px;
	display: flex;
	justify-content: flex-end;
	padding: 20px;
}
.menu-box {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: rgba(0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-icon {
	width: 20px;
	height: 2px;
	padding: 5px 0;
	background: #fff;
	border-top: 2px solid #fff;
	border-bottom: 2px solid #fff;
	background-clip: content-box;
}
.me-wrap {
	position: absolute;
	top: 140px;
	width: 100%;
	background: #101821;
	color: #fff;
}
.info {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.info img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-right: 20px;
	padding-bottom: 20px;
}
.info button {
	height: 40px;
	padding: 0 24px;
	background: #393842;
	border: none;
	color: white;
}
.des {
	padding: 20px 0;
}
.des h2 {
	font-size: 24px;
	font-weight: bold;
}
.des span {
	padding: 10px 0 15px 0;
	display: block;
}
.des p {
	line-height: 24px;
}
.user-tag span {
	font-size: 14px;
	color: #ccc;
	margin-right: 5px;
	background: rgba(0,0,0,.6);
	padding: 5px 8px;
}
.user-tag2 {
	padding: 20px 0;
}
.user-tag2 span {
	font-size: 14px;
	margin-left: 15px;
	color: #ccc;
} 
.user-tag2 a {
	margin-left: 5px;
	color: #ccc;
} 
.me-ad {
	background: #fe2c55;
	text-align: center;
	padding: 10px 0;
	border-radius: 4px;
}
.me-tab {
	height: 300px;
}
.me-navbar {
	display: flex;
	padding: 0 20px;
	align-items: center;
	justify-content: space-between;
}
.me-navbar .item {
	padding: 10px 25px;
	color: #ccc;
}
.me-navbar .active {
	border-bottom: 2px solid #fddf0e;
	color: #fff;
}
.tab-img img {
	width: 30%;
	margin: 0 5px;
}
</style>