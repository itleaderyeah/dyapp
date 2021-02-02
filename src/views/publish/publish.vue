<template>
	<div class="publish">
		<div class="pub-top">
			<div class="back" @click="goHome"><span>x</span></div>
			<div><span>
				<span class="iconfont icon-yinfu"></span>
				</span>选择音乐
			</div>
		</div>
		<div class="upload-box">
			<video ref="video" 
			style="width:100%;height:500px;object-fit:fill;"></video>
			<div class="upload-bar">
				<div class="bar-item">
					<div class="icon">
						<img src="@/static/img/xxx.jpeg" alt="img" />
					</div>
					<p>道具</p>
				</div>
				<div class="bar-item" @click="getCamera">
					<div class="pub-border">
						<div class="pub"></div>
					</div>
				</div>
				<div class="bar-item" @click="goUpload">
					<div class="icon">
						<img src="@/static/img/bq.jpg" alt="img" />
					</div>
					<p>上传</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Publish',
	data () {
		return {
			
		}
	},
	methods: {
		// 打开摄像头
		getCamera () {
			navigator.mediaDevices.getUserMedia({
				video:true
			}).then(success => {
				this.$refs.video.srcObject = success
				this.$refs.video.play()
			}).catch(err => console.log(err))
		},
		// 上传
		goUpload () {
			this.$router.push('/upload')
		},
		goHome () {
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.publish {
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
.upload-box {
	background: #ccc;
	height: -webkit-fill-available;
}
.upload-box .upload-bar {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100px;
	padding: 0 50px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
.upload-box .upload-bar .icon {
	width: 30px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid #f00;
	margin-bottom: 10px;
	overflow: hidden;
}
.upload-box .upload-bar .icon img {
	width: 30px;
	height: 30px;
}
.pub-border {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid #fe2c55;
	box-shadow: -5px 0 5px #fe2c55,5px 0 5px #fe2c55,0 -5px 5px #fe2c55,0 5px 5px #fe2c55;
}
.pub {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: #fe2c55;
}
</style>