<template>
	<div class="user-header">
		<div class="back" v-if="hasLeft" @click="goBack">
			<span @click="goHome">&lt;</span>
		</div>
		<div><span class="editText">{{title}}</span></div>
		<div class="right" v-if="hasRight">
			<span>{{rightText}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		title: {
			type: String,
			required: true
		},
		rightText: {
			type: String,
			required: true
		},
		hasLeft: {
			type: Boolean,
			required: false
		},
		hasRight: {
			type: Boolean,
			required: false
		}
	},
	data () {
		return {
			
		}
	},
	methods: {
		goBack () {
			this.$emit("changeBack")
		},
		goHome () {
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.user-header {
	height: 48px;
	width: 100%;
	line-height: 48px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #292831;
	background: #101821;
	color: #eee;
	position: relative;
}
.back {
	position: absolute;
	left: 10px;
}
.right {
	position: absolute;
	right: 10px;
}
.editText {
	width: 200px;
	float: left;
	margin-left: 90%;
}
</style>