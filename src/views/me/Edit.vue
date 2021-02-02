<template>
	<div class="edit">
		<my-header title="编辑资料" :hasLeft="true" 
		:hasRight="true" rightText="" @changeBack="toBack"></my-header>
		<div class="edit-wrap">
			<div class="ava-box">
				<div class="avatar">
					<img src="@/static/img/xxx.jpeg" alt="img" />
					<span class="iconfont icon-gongnengguanli"></span>
					<input type="file">
				</div>
				<p>更换头像</p>
			</div>
			<div class="edit-box">
				<div class="edit-item border">
					<span class="label">名字</span>
					<span>名字<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item border">
					<span class="label">抖音号</span>
					<span>16543633255<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item border">
					<span class="label">简介</span>
					<span>做程序员好困喔...<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item border">
					<span class="label">学校</span>
					<span>点击设置<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item border">
					<span class="label">性别</span>
					<span>女<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item border">
					<span class="label">生日</span>
					<span>1996-11-22<span class="icon">&gt;</span></span>
				</div>
				<div class="edit-item">
					<span class="label">地区</span>
					<span>中国北京<span class="icon">&gt;</span></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import myHeader from '@/components/header/myHeader'
export default {
	name: 'Edit',
	data () {
		return {
			
		}
	},
	components: {
		myHeader
	},
	methods: {
		toBack () {
			this.$router.push('/me')
		}
	}
}
</script>

<style scoped>
.edit {
	background: #101821;
}
.edit-wrap {
	padding: 0 10x;
	box-sizing: border-box;
}
.ava-box {
	color: #ccc;
	text-align: center;
	padding: 20px;
}
.avatar {
	position: relative;
}
.avatar img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 16px;
	opacity: .5;
}
.avatar .iconfont {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	font-size: 26px;
	color: #fff;
}
.avatar input {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	opacity: 0;
}
.edit-box {
	border-top: 1px solid #292831;
	color: #ccc;
}
.edit-item {
	display: flex;
	justify-content: space-between;
	line-height: 60px;
}
.edit-item .label {
	color: #fff;
}
.edit-item .icon {
	margin-left: 10px;
}
</style>