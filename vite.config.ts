import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
      server: {
        proxy: {
          '/Prod': 'https://6ijq8h7rq7.execute-api.eu-north-1.amazonaws.com',
          '/Prod/Login': 'https://6ijq8h7rq7.execute-api.eu-north-1.amazonaws.com'
        }
      },
      plugins: [react()],
  });
  