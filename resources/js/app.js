import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";

const app = createApp(App);
app.use(router);

createApp(App).use(router).mount("#app");

require("./bootstrap");
