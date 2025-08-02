import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     tailwindcss(),
      react({
      jsxRuntime: 'automatic', // Add this line
      babel: {
        presets: ['@babel/preset-react']
      }
    })],
      esbuild: {
    loader: 'jsx',
    include: [
      // Add these lines to handle all relevant files
      'src/**/*.jsx',
      'src/**/*.js',
      'node_modules/**/*.jsx'
    ],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
    define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'import.meta.env.VITE_SOCKET_URL': JSON.stringify(process.env.VITE_SOCKET_URL)
  }
})
