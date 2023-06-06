/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./src/**/*.{html,js}"], this does not pick taiwind css,use below
  content: [ "./index.html",
  "./src/**/*.{js,jsx,ts,tsx,vue}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
