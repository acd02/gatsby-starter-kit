const tailwindcss = require(`tailwindcss`)

module.exports = {
  plugins: [
    require('postcss-nesting'),
    tailwindcss(`./tailwind.config.js`),
    require(`autoprefixer`)
  ]
}
