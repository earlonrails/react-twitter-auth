module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    production: {
      presets: ['minify']
    },
    development: {
      plugins: ['react-refresh/babel']
    }
  }
};
