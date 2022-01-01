const path = require('path');
const withLess = require("next-with-less");

module.exports = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {
    /* ... */
  },
  // env:{
  //   API_GATEAWAY_ENDPOINT: process.env.API_GATEAWAY_ENDPOINT,
  //   DEBUG:  process.env.DEBUG,
  // },
  webpack: (config) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components')
		// config.resolve.alias['configs'] = path.join(__dirname, 'configs')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['assets'] = path.join(__dirname, 'assets')
    // config.resolve.alias['data'] = path.join(__dirname, 'data')
    config.resolve.alias['layouts'] = path.join(__dirname, 'layouts')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
		return config
	},
});