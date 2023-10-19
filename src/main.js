import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import '@/assets/styles/main.scss'

// global components
import titleSpark from '@/components/base/elements/titleSpark.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('titleSpark', titleSpark)
  .mount('#app')
