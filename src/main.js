import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NewsCard from './components/NewsCard.vue'
import './assets/tailwind.css'

const app = createApp(App)
app.component('news-card', NewsCard)
app.use(router).mount('#app')
