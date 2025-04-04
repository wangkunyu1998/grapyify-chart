import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
export default defineConfig({

  plugins: [pluginPreview({
    previewMode:'internal',
    iframeOptions:{
      devPort: 3030,
      position:'fixed'
    }
  })],
  
});
