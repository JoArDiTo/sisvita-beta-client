// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  devToolbar: {
    enabled: false
  },
  env: {
    schema: {
      SERVER_URL: envField.string({context: 'server', access: 'public', default: 'http://localhost:5000'}),
    }
  }
});