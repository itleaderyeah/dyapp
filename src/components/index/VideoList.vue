<template>
	<div class="video-list">
    <right-bar :showComment="showComment" @changeCom="showComs"></right-bar>
		<swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in dataList" :key="item.id">
      	<div>
          <videos :videoList="item" ref="videos" :index="index"></videos>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 评论 -->
    <transition name="up">
      <div class="comment-wrap-box" v-if="showComment">
        <div class="comment-wrap">
          <div class="comment-list">
            <div class="comment-top">
              <div class="number">15.0w条评论</div>
              <div class="close" @click="closeComs">x</div>
            </div>
            <div class="comment-body">
              <div class="comment-box">
                <div class="comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">前端切图仔</p>
                      <p class="replay-des">求今晚不要加班，不要加班，不要加班
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="sub-comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">不想加班</p>
                      <p class="replay-des">
                        <span>回复</span>
                        <span class="re-name">前端切图仔</span>
                        <span>坚决不要加班</span>
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="more">------展开60条回复</div>
              </div>
            </div>
            <div class="comment-body">
              <div class="comment-box">
                <div class="comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">前端切图仔</p>
                      <p class="replay-des">求今晚不要加班，不要加班，不要加班
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="sub-comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">不想加班</p>
                      <p class="replay-des">
                        <span>回复</span>
                        <span class="re-name">前端切图仔</span>
                        <span>坚决不要加班</span>
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="more">------展开60条回复</div>
              </div>
            </div>
            <div class="comment-body">
              <div class="comment-box">
                <div class="comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">前端切图仔</p>
                      <p class="replay-des">求今晚不要加班，不要加班，不要加班
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="sub-comment-item">
                  <div class="user-pic">
                    <img src="@/static/img/xxx.jpeg" alt="img">
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">不想加班</p>
                      <p class="replay-des">
                        <span>回复</span>
                        <span class="re-name">前端切图仔</span>
                        <span>坚决不要加班</span>
                        <span class="time">03-19</span>
                      </p>
                    </div>
                    <div class="zan">
                      <span class="iconfont icon-aixin"></span>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="more">------展开60条回复</div>
              </div>
            </div>
            <!-- 评论框 -->
            <div class="reply-input">
              <input placeholder="留下你的精彩评论" />
              <span class="emoji">@</span>
              <span class="iconfont icon-pinglun"></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
	</div>
</template>

<script>
import RightBar from '@/components/index/RightBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Videos from '@/components/index/Videos'
export default {
	name: 'VideoList',
	data () {
		return {
      page: 0,
      showComment: false,
      swiperOption: {
        direction:"vertical",
        grabCursor: true, 
        setWrapperSize: true, 
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true, 
        mousewheelControl: true, 
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, 
        observeParents: true,
        on: {
          tap:()=>{
            this.playAction(this.page)
          },
          slideNextTransitionStart:()=>{
            this.page += 1
            this.page = this.page==this.dataList.length?this.dataList.length-1:this.page
            this.nextPlay(this.page);
            console.log(this.page)
          },
          slidePrevTransitionEnd:()=>{
            this.page = this.page<0?0:this.page
            if (this.page > 0) {
              this.page -= 1
              this.prevPlay(this.page);
              console.log(this.page)
            }
          }
        }
      },
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
	components: {
		swiper,
    swiperSlide,
    Videos,
    RightBar
	},
	methods: {
		playAction (v) {
      this.$refs.videos[v].playOrStop()
    },
    nextPlay (v) {
      this.$refs.videos[v-1].stop()
      this.$refs.videos[v].play()
    },
    prevPlay (v) {
      this.$refs.videos[v].play()
      this.$refs.videos[v+1].stop()
    },
    showComs () {
      this.showComment = true
    },
    closeComs () {
      this.showComment = false
    }
	}
}
</script>

<style scoped>
button.vjs-custom-skin > .video-js .vjs-big-play-button {
  width: 50px;
  height: 50px;
  top: 45%;
  border-radius: 50%;
}
/* 评论区样式 */
.up-enter-active,.up-leave-active {
  transition: all .5s;
}
.up-enter,.up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
.comment-wrap-box {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  height: 500px;
  width: 100%;
  background: #fff;
}
.comment-wrap {
  position: fixed;
  left: 0;
  bottom: 50px;
  z-index: 999;
  height: 500px;
  width: 100%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
.comment-top {
  display: flex;
  align-items: center;
}
.number {
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: #333;
}
.close {
  font-size: 24px;
  color: #666;
  padding-right: 10px;
}
.comment-body {
  max-width: 450px;
  overflow: auto;
  margin-top: 20px;
}
.comment-item {
  display: flex;
}
.user-pic img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}
.item-info {
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
}
.reply {
  width: 90%;
}
.reply .des {
  line-height: 24px;
}
.reply .name {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
.reply .time {
  color: #666;
}
.zan .iconfont {
  font-size: 20px;
  color: #ccc;
  margin: 0 2px;
}
.zan p {
  color: #ccc;
  margin-top: 5px;
}
.sub-comment-item {
  display: flex;
  margin-left: 33px;
  margin-top: 10px;
}
.re-name {
  padding: 0 10px;
  color: #666;
}
.more {
  margin-left: 33px;
  margin-top: 20px;
}
.reply-input {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  align-items: center;
}
.reply-input input {
  width: 70%;
  line-height: 40px;
  border: none;
  padding: 0 10px;
  font-size: 20px;
}
.reply-input .emoji {
  font-size: 30px;
  color: #ccc;
  margin-right: 6%;
}
.reply-input .iconfont {
  font-size: 33px;
  color: #ccc;
}
</style>