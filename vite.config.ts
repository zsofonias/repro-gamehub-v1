import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Set the @ alias to your src directory
      // You can add more aliases here if needed:
      // '@components': path.resolve(__dirname, './src/components'),
      // '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
