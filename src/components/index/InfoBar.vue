<template>
	<div class="info-bar">
		<div class="infobar-item"><span>@特困女程序员</span></div>
		<div class="infobar-item"><span>抖音App</span></div>
		<div class="infobar-item music-item">
			<span class="iconfont icon-yinfu"></span>
			<div class="music-name">
				<span data-text="特困女程序员">特困女程序员原生</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InfoBar',
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style scoped>
.info-bar {
	color: #fff;
	font-size: 16px;
	padding-left: 10px;
	position: fixed;
	z-index: 100;
	left: 10px;
	bottom: 55px;
}
.info-bar .infobar-item {
	padding: 5px 0;
}
.infobar-item .icon-yinfu {
	margin-right: 5px;
	display: block;
}
.music-item {
	display: flex;
}
.music-item .music-name {
	width: 150px;
	-border: 1px solid #f00;
	white-space: nowrap;
	overflow: hidden;
	font-size: 14px;
}
.music-item .music-name span {
	display: inline-block;
	animation: scroll 5s linear infinite;
}
.music-item .music-name span::after {
	content: attr(data-text);
	margin-left: 30px;
}
@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-50% - 20px));
	}
}
</style>