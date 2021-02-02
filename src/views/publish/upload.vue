<template>
	<div class="upload">
		<div class="pub-top">
			<div class="back" @click="goPublish"><span>x</span></div>
			<div>
				<span>
				<span class="iconfont icon-yinfu"></span>
				</span>选择素材
			</div>
		</div>
		<span class="item" :class="tabIndex==0?'active':''" 
		@click="changeTab(0)">作品23</span>
		<span class="item" :class="tabIndex==1?'active':''" 
		@click="changeTab(1)">照片33</span>
		<div class="tab-wrap">
			<div class="tab-video" v-for="item in dataList" :key="item.id">
				<div class="tab-v">
					<video :src="item.url"></video>
				</div>
			</div>
			<div class="tab-con" v-show="tabIndex==1">
				<div class="file-btn">
					<a href="javascript:;" class="btn">
						<input type="file" class="hide" />更多图片
					</a>
					<div class="tab-img-box">
						<img src="@/static/img/xxx.jpeg" alt="img" />
					</div>
					<div class="no">暂无图片，请上传</div>
				</div>
			</div>
			<div class="tab-con" v-show="tabIndex==0">
				<div class="file-btn">
					<a href="javascript:;" class="btn">
						<input type="file" class="hide" />
					</a>
					<div class="no">暂无视频，请上传</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Upload',
	data () {
		return {
			tabIndex: 0,
			dataList:[
        {
          id:"1",
          url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"
        },
        {
          id:"2",
          url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
        },
        {
          id:"3",
          url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
        },
        {
          id:"4",
          url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        }
    	]
		}
	},
	methods: {
		changeTab (v) {
			this.tabIndex = v
		},
		goPublish () {
			this.$router.push('/publish')
		}
	}
}
</script>

<style scoped>
.upload {
	background: #ccc;
	color: #fff;
}
.pub-top {
	height: 44px;
	line-height: 44px;
	display: flex;
	justify-content: center;
	color: #fff;
	font-size: 16px;
	position: relative;
}
.back {
	position: absolute;
	left: 10px;
}
.back span {
	font-size: 28px;
}
.item {
	width: 50%;
	height: 30px;
	line-height: 30px;
	text-align: center;
	float: left;
	background: #fff;
	color: #000;
	margin-bottom: 3px;
}
.active{
	border-bottom: 3px solid orange;
}
.tab-wrap {
	width: 100%;
	overflow: hidden;
}
.btn {
	display: block;
	height: 200px;
	background: #ccc;
}
.btn {
	color: #000;
	padding: 20px;
}
.btn > input {
	border: none;
	display: block;
	width: 70px;
	height: 25px;
	background: #fff;
	margin-bottom: 10px;
}
.no {
	color: #000;
	font-size: 20px;
	text-align: center;
}
.tab-img-box img {
	width: 100px;
	height: 100px;
}
</style>