const postcssConfig = {
  plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-nested'),
  ]
}
module.exports = postcssConfig;