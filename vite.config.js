import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cv-redirect-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ? req.url.split('?')[0] : '';
          if (url === '/cv' || url === '/resume' || url === '/cv/' || url === '/resume/') {
            res.writeHead(302, { Location: '/cv.pdf' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5174,
  }
});
