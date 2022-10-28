import { createApp } from 'vue';
import { router } from './router';
import { globalComponents } from './shared/use-global-components';
import * as components from '@/components/global';
import App from './App.vue';

createApp(App).use(globalComponents, components).use(router).mount('#app');
