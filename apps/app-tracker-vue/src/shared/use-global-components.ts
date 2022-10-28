import type { Plugin } from 'vue';

export const globalComponents: Plugin = {
  install(app, components) {
    const entries = Object.entries(components);
    for (const [name, comp] of entries) {
      app.component(name, comp);
    }
  },
};
