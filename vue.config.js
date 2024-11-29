import { defineConfig } from '@vue/cli-service';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // This sets @ to resolve to the 'src' folder
      }
    }
  }
});