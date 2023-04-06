import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'vanilla-web-components',
  plugins: [sass()],
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: 'https://canonical.github.io/vanilla-web-components/', // this breaks local dev but is needed for gh-pages 🤷 TODO: fix
      serviceWorker: null, // disable service worke
      copy: [{ src: 'docs' }],
    },
  ],
};
