// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  devToolbar: {
    enabled: false
  },
  env: {
    schema: {
      SERVER_URL: envField.string({context: 'server', access: 'public', default: 'http://localhost:5000'}), //Local server
    }
  },
  adapter: vercel()
});