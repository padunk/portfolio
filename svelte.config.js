const autoPreprocess = require('svelte-preprocess');

module.exports = {
	preprocess: autoPreprocess({
      scss: {
         includePaths: ['src'],
      },
      postcss: {
         plugins: [require('autoprefixer')],
      },
   }),
};