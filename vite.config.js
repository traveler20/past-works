import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy"; // 追加

export default defineConfig({
	base: "./",
	server: {
		port: 8888,
	},
	plugins: [
		legacy({
			targets: ["ie >= 11"],
			additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
		}),
	],
});
