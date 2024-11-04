/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  mode: "jit",
  important: true,
  content: [
    "./src/**/*.{html,ts,css,scss,sass,less,styl}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    fontSize: {
      "12px": "12px",
      "18px": "18px",
      "16px": "16px",
      "14px": "14px",
      "20px": "20px",
      "26px": "26px",
      "45px": "45px",
    },
  },
  plugins: [],
}

