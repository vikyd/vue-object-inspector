const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.less/,
    use: ['style-loader', 'css-loader', 'less-loader'],
    include: path.resolve(__dirname, '../'),
  })
  Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, '../src'),
    '@assets': path.resolve(__dirname, '../src/assets/'),
  })
  // Return the altered config
  return config
}
