import { createApp } from "vue"
import "@/css/app.css"
import App from "./App.vue"
import router from "@/router/router"

const app = createApp(App)

app.use(router)
app.mount("#portfolio")
