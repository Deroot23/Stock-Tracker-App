import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "src"),
//     },
//   },
// });
