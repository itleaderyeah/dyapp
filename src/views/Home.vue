<template>
	<div class="home">
		<top-bar></top-bar>
		<video-list></video-list>
		<info-bar></info-bar>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TopBar from '@/components/index/TopBar'
import VideoList from '@/components/index/VideoList'
import InfoBar from '@/components/index/InfoBar'
import TabBar from '@/components/home/TabBar'
export default {
	name: 'Home',
	data () {
		return {
			
		}
	},
	components: {
		TabBar,
		TopBar,
		VideoList,
		InfoBar
	},
	methods: {

	}
}
</script>

<style scoped>
.home {
	background: #000;
}
</style>