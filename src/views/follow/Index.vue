<template>
	<div class="edit-pub">
		<my-header :hasLeft="true" title="发布" rightText=""></my-header>
		<div class="text-wrap">
			<div class="text-box">
				<div class="text-contr">
					<div class="sele-img">
						<img src="@/static/img/xxx.jpeg" alt="img" />
					</div>
					<textarea cols="30" rows="5" placeholder="说点吧..."></textarea>
					<button>#话题</button>
					<button>@好友</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MyHeader from '@/components/header/myHeader'
export default {
	name: 'Pub',
	data () {
		return {
			
		}
	},
	components: {
		MyHeader
	},
	methods: {
		
	}
}
</script>

<style scoped>
.edit-pub {
	background: #161824;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	color: #fff;
}
.text-wrap {
	padding: 0 10px;
	box-sizing: border-box;
}
.text-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
	border-top: 1px solid #282a36;
}
.text-box .edit-box {
	height: 30px;
	width: 100%;
	text-align: center;
}
.edit-box .edit-item span {
	display: block;
	width: 200px;
	height: 30px;
}

.text-contr {
	width: 300px;
}
.text-contr textarea {
	border: none;
	background: #161824;
	color: #fff;
}
.text-contr button {
	background: #3a3a44;
	border-radius: 4px;
	border: none;
	padding: 8px 10px;
	margin: 10px;
	font-size: 16px;
	color: #fff;
}
.sele-img img {
	width: 120px;
	height: 130px;
}
</style>