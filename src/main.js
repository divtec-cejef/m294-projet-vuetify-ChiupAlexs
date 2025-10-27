import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {registerPlugins} from '@/plugins/index.js'; // très important !
import App from './App.vue'
import 'vuetify/styles'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

// createApp(App).use(vuetify).mount('#app')
