const autoPreprocess = require('svelte-preprocess');

module.exports = {
	preprocess: autoPreprocess({
      scss: {
         includePath: ['src'],
      },
      postcss: {
         plugins: require['autoprefixer'],
      },
   }),
};