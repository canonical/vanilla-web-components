import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'vanilla-web-components',
  plugins: [sass()],
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '@canonical/vanilla-web-components',
      proxiesFile: './react-components/index.ts',
    }),
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
