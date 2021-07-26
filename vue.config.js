module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network',
        'utils' : '@/utils',
        'views' : '@/views',
      }
    }
  }
}
