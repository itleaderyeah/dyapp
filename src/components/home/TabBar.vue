<template>
	<div class="tab-bar">
		<div class="item" @click="toggleOption(0)">
			<router-link to="/" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
		</div>
		<div class="item" @click="toggleOption(1)">
			<router-link to="/" tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
		</div>
		<div class="item" @click="toggleOption(2)">
			<span>
				<img src="@/static/img/add.png" class="add-btn" />
			</span>
		</div>
		<div class="item" @click="toggleOption(3)">
			<router-link to="/publish" tag="span" :class="tabIndex==3?'active':''">消息</router-link>
		</div>
		<div class="item" @click="toggleOption(4)">
			<router-link to="/sign" tag="span" :class="tabIndex==4?'active':''">
			我</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
	data () {
		return {
			tabIndex: 0
		}
	},
	methods: {
		toggleOption (i) {
			this.tabIndex = i;
			console.log(this.tabIndex);
		}
	}
}
</script>

<style scoped>
.tab-bar{
	height: 50px;
	line-height: 50px;
	width: 100%;
	background: black;
	color: #ccc;
	position: fixed;
	left: 0;
	bottom: 0;
	font-size: 16px;
	display: flex;
	justify-content: center;
	z-index: 99; 
}
.tab-bar .item{
	flex: 1;
	text-align: center;
}
.tab-bar .item .active{
	color: #fff;
}
.tab-bar .item span .add-btn{
	margin-top:3px;
}
.tab-bar .item span.active {
	color: #fff;
}
</style>