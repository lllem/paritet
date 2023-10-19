import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import '@/assets/styles/main.scss'

// global components
import pBtn from '@/components/base/elements/pBtn.vue'
import titleSpark from '@/components/base/elements/titleSpark.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('pBtn', pBtn)
  .component('titleSpark', titleSpark)
  .mount('#app')
