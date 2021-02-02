<template>
	<div class="msg">
		<my-header title="消息" 
		:hasRight="true" rightText="发起聊天"></my-header>
		<div class="msg-wrap">
			<div class="msg-nav">
				<div class="mag-nav-item">
					<div class="icon-box"><span class="icon"></span></div>
					<p>粉丝</p>
				</div>
				<div class="mag-nav-item">
					<div class="icon-box"><span class="icon"></span></div>
					<p>赞</p>
				</div>
				<div class="mag-nav-item">
					<div class="icon-box"><span class="icon"></span></div>
					<p>@我</p>
				</div>
				<div class="mag-nav-item">
					<div class="icon-box"><span class="icon"></span></div>
					<p>评论</p>
				</div>
			</div>
			<div class="msg-ad">
				<img src="@/static/img/bq.jpg" alt="img" />
			</div>
			<div class="down">
				<div>抖音好友圈</div>
				<div><button class="btn">下载</button></div>
			</div>
			<div class="msg-list-box">
				<div class="msg-list">
					<img src="@/static/img/xxx.jpeg" alt="img" />
					<div class="user-des">
						<div class="top">
							<span>抖音小助手</span>
							<span>12:23</span>
						</div>
						<div class="top mag">
							<span>抖音安全课堂</span>
							<span class="no-see"></span>
						</div>
					</div>
				</div>
				<div class="msg-list">
					<img src="@/static/img/0.jpg" alt="img" />
					<div class="user-des">
						<div class="top">
							<span>抖音小助手</span>
							<span>10:27</span>
						</div>
						<div class="top mag">
							<span>抖音安全课堂</span>
						</div>
					</div>
				</div>
				<div class="msg-list">
					<img src="@/static/img/1.jpg" alt="img" />
					<div class="user-des">
						<div class="top">
							<span>抖音小助手</span>
							<span>昨天</span>
						</div>
						<div class="top mag">
							<span>抖音安全课堂</span>
						</div>
					</div>
				</div>
				<div class="msg-list">
					<img src="@/static/img/2.jpg" alt="img" />
					<div class="user-des">
						<div class="top">
							<span>抖音小助手</span>
							<span>昨天</span>
						</div>
						<div class="top mag">
							<span>抖音安全课堂</span>
						</div>
					</div>
				</div>						
			</div>
		</div>
	</div>
</template>

<script>
import myHeader from '@/components/header/myHeader'
export default {
	name: 'Msg',
	data () {
		return {
			
		}
	},
	components: {
		myHeader
	},
	methods: {
		
	}
}
</script>

<style scoped>
.msg-wrap {
	padding: 0 20px;
	color: #fff;
	background: #101821;
}
.mag-nav {
	padding: 5px 20px;
	display: flex;
	justify-content: space-between;
}
.mag-nav-item {
	float: left;
	text-align: center;
	width: 60px;
	padding: 15px 0;
	margin: 0 16.5px;
}
.icon {
	display: block;
	width: 60px;
	height: 60px;
	background: #ff4d74;
	border-radius: 5px;
	margin-bottom: 5px;
}
.msg-ad {
	padding: 0 20px;
	border-top: 1px solid #242630;
	border-bottom: 1px solid #242630;
}
.msg-ad img {
	width: 100%;
	height: 120px;
}
.down {
	padding: 20px 0;
	color: #ccc;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #242630;
}
.down .btn {
	padding: 8px 25px;
	border: none;
	background: #fe2c55;
	color: #fff;
	border-radius: 2px;
}
.msg-list-box {
	padding-top: 30px;
}
.msg-list {
	padding: 10px 0;
	display: flex;
}
.msg-list img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.user-des {
	flex: 1;
	height: 60px;
}
.user-des .top {
	font-size: 14px;
	margin-left: 10px;
	display: flex;
	line-height: 25px;
	justify-content: space-between;
}
.user-des .mag {
	color: #ccc;
}
.no-see {
	display: block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: orange;
}
</style>