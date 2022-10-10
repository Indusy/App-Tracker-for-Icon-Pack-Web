import { defineConfig, HttpProxy, type ProxyOptions } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import envPlugin from 'vite-plugin-environment';
import path from 'path';
import { name, version } from './package.json';

function confProxy(raw: string, options: ProxyOptions) {
  return {
    [raw]: {
      configure(proxy: HttpProxy.Server) {
        proxy.on('proxyReq', (proxyReq) => {
          console.log('Proxy--------->', proxyReq);
        });
      },
      ...options,
    } as ProxyOptions,
  };
}

function confAlias(raw: string, alias: string) {
  return {
    [raw]: path.resolve(__dirname, alias),
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    envPlugin(
      {
        appName: name,
        appVersion: version,
      },
      {
        defineOn: 'import.meta.env',
      },
    ),
  ],
  resolve: {
    alias: {
      ...confAlias('@', './src'),
      ...confAlias('@images', './src/assets/images'),
      ...confAlias('@styles', './src/assets/scss'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/vars.scss';`,
      },
    },
  },
  base: './',
  server: {
    host: '0.0.0.0',
    port: 8989,
    open: true,
    proxy: {
      ...confProxy('/api', {
        changeOrigin: true,
        target: 'https://apptracker-api.cn2.tiers.top',
      }),
    },
  },
});
