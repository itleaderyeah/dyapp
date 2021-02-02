<template>
	<div class="top-bar">
		<div class="left">
			<span class="iconfont icon-live"></span>
		</div>
		<div class="middle">
			<div class="item" @click="changeIndex(0)">
				<span :class="topIndex==0?'active':''">同城</span>
			</div>
			<div class="item" @click="changeIndex(1)">
				<span :class="topIndex==1?'active':''">关注</span>
			</div>
			<div class="item" @click="changeIndex(2)">
				<span :class="topIndex==2?'active':''">推荐</span>
			</div>
		</div>
		<div class="right">
			<span class="iconfont icon-sousuo"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
	data () {
		return {
			topIndex: 0
		}
	},
	methods: {
		changeIndex (i) {
			this.topIndex = i;
		}
	}
}
</script>

<style scoped>
.top-bar {
	height: 60px;
	font-size: 18px;
	color: #ccc;
	line-height:60px;
	display: flex;
}
.left,.right {
	width:20%;
	padding: 0 12px;
}
.iconfont {
	font-size: 24px;
}
.middle {
	width:60%;
	display: flex;
	justify-content: center;
}
.middle .item {
	flex: 1;
	text-align: center;
}
.middle .item span {
	padding-bottom: 9px;
	transition: all 0.3s ease;
}
.middle .item span.active {
	color: #fff;
	border-bottom: 3px solid #fff;
}
.right {
	text-align: right;
}
</style>