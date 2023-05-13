import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/app.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/permission'
import format from 'date-fns/format'

//awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faHeart,faFire,faSmile,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {faCommentAlt} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faHeart,faCommentAlt,faFire,faSmile,faPencilAlt)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

import relativeTime from 'dayjs/plugin/relativeTime';
//国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs')

//相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn')
dayjs().locale('zh-cn').format()

Vue.prototype.dayjs = dayjs  //全局使用dayjs

Vue.filter('date', (date) => {
  return format(new Date(date), 'yyyy-MM-dd,HH:mm')
})

Vue.use(Buefy)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
