import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/views/HomeView'),
    meta:{title:'主页'}
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: ()=> import('@/views/auth/Register'),
    meta:{title:'注册'}
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/auth/Login'),
    meta:{title:'登录'}
  },
  //重置密码
  {
    path: '/resetpwd',
    name: 'resetpwd',
    component: ()=> import('@/views/auth/Resetpwd'),
    meta:{title:'重置密码'}
  },
  {
    path: '/404',
    name: '404',
    component: ()=> import('@/views/error/404'),
    meta:{title:'404-Notfound'}     //每一个title不一样，从meta.title读取
  },
  {
    path:'/post/create',
    name:'post-create',
    component:()=>import('@/views/post/Create'),
    meta:{title:'信息发布', requireAuth:true}
  },
  {
    path:'/post/:id',
    name:'post-detail',
    component:()=>import('@/views/post/Detail'),
    meta:{title:'详情'}
  },
  {
    name: 'topic-edit',
    path: '/topic/edit/:id',
    component: () => import('@/views/post/Edit'),
    meta: {
      title: '编辑',requireAuth:true
    }
  },
  {
    name: 'tag',
    path: '/tag/:name',
    component: () => import('@/views/tag/Tag'),
    meta: { title: '主题列表' }
  },
  // 检索
  {
    name: 'search',
    path: '/search',
    component: () => import('@/views/Search'),
    meta: { title: '检索' }
  },
  // 用户主页
  {
    name: 'user',
    path: '/member/:username/home',
    component: () => import('@/views/user/Profile'),
    meta: { title: '用户主页' }
  },
  // 用户设置
  {
    name: 'user-setting',
    path: '/member/:username/setting',
    component: () => import('@/views/user/Setting'),
    meta: { title: '设置',requireAuth:true }
  },

  //question 的路由
  {
    name: 'question',
    path: '/question',
    component: ()=>import('@/views/question/index'),
    meta:{title: '你问我答'}
  },
  {
    name: 'question-detail',
    path: '/question/:id',
    component: ()=>import('@/views/question/Details'),
    meta:{title: '问题详情'}
  },
  {
    path:'*',
    redirect:'/404',
    hidden:true,
    meta:{title:'404-Notfound'} 
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err=>err)
}


const router = new VueRouter({
  routes
})

export default router
