module.exports = {
  // modify dev page
  pages: {
    index: {
      // dev entry
      entry: 'example/main.js',
      template: 'example/public/index.html',
      filename: 'index.html',
    },
  },
  css: { extract: false },
}
