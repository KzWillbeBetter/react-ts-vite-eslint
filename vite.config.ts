import {defineConfig} from 'vite'
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
        }
    },
})
