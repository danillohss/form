import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

//createApp(App).use(Maska).mount('#app')

const app = createApp(App)

//biblioteca moment para formatar datas - LINK DOCUMENTAÇÃO: momentjs.com
app.config.globalProperties.$moment = moment

//Biblioteca mascara para input - LINK DOCUMENTAÇÃO: https://beholdr.github.io/maska/#/
app.use(Maska)
app.mount('#app')