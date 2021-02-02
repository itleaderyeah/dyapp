import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import sign from '@/views/sign'
import tpsign from '@/views/tpsign'
import code from '@/views/code'
import me from '@/views/me/Me.vue'
import edit from '@/views/me/Edit.vue'
import msg from '@/views/msg/msg.vue'
import publish from '@/views/publish/publish.vue'
import upload from '@/views/publish/upload.vue'
import pub from '@/views/follow/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      	// {
      	// 	path: '/follow',
      	// 	name: 'follow',
      	// 	component: ()=>('@/views/follow/Index.vue')
      	// },
       //  {
       //    path: '/me',
       //    name: 'me',
       //    component: ()=>('@/views/me/Me.vue')
       //  }
      ]
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/tpsign',
      name: 'tpsign',
      component: tpsign
    },
    {
      path: '/code',
      name: 'code',
      component: code
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/pub',
      name: 'pub',
      component: pub
    }
  ]
})
