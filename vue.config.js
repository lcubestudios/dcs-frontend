module.exports = 
{
  publicPath: process.env.BASE_URL,
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = process.env.SITE_TITLE;
			return args;
		})
	}
};