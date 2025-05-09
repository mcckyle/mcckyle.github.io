//babel.config.js
export default {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    '@babel/preset-react',
  ],
  plugins: ['babel-plugin-transform-import-meta'],
};
