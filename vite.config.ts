// vite.config.js
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/lib/${name}/style/index.less`,
                },
            ],
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // 支持内联 JavaScript
            }
        }
    },
})
