import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.VITE_APP_BASE_PATH ?? '/',
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  };
});
