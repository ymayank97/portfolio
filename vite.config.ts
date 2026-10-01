import { defineConfig } from 'vite';
import { renderPage } from './src/render';

let base = '/portfolio/';

export default defineConfig({
  base,
  build: { modulePreload: false },
  plugins: [{
    name: 'render-portfolio',
    configResolved(config) { base = config.base; },
    transformIndexHtml: {
      order: 'pre',
      handler(html) { return html.replace('<!--portfolio-->', renderPage(base)); },
    },
  }],
});
