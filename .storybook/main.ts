import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router', // útil para simular rotas Next.js
    '@storybook/addon-a11y', // para acessibilidade,
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`);
    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript', // Opcional, mas útil para gerar documentação
  },
};
export default config;
