// postcss.config.js
module.exports = {
    plugins: [
      require('tailwindcss'),
      // Optionally include autoprefixer, if you want vendor prefixes automatically:
      require('autoprefixer'),
  
      // You also have "postcss-simple-vars" installed, so if you're actually using it:
      require('postcss-simple-vars'),
    ],
  }
  