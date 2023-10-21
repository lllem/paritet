import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import '@/assets/styles/main.scss'

// global components
import pBtn from '@/components/base/elements/pBtn.vue'
import titleSpark from '@/components/base/elements/titleSpark.vue'

const DEFAULT_TITLE = 'ПАРИТЕТ'

router.beforeEach((to) => {
  if (to.path === '/') document.title = DEFAULT_TITLE
  else if (to.meta.title) document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
  else document.title = DEFAULT_TITLE
})

createApp(App)
  .use(store)
  .use(router)
  .component('pBtn', pBtn)
  .component('titleSpark', titleSpark)
  .mount('#app')
