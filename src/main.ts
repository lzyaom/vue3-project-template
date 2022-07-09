import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.css'

createApp(App).mount('#app')

const calc = (a: number, b: number): number => a - b
console.log(calc(2, 1))
