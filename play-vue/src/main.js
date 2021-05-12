import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/css/reset.css'
import router from '@/router/router.js'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
const app = createApp(App)
app.use(router).use(ElementPlus,{ locale }).mount('#app')
