/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linear-gradient': '#6448fe',
        'light-grayish-violet': '#dedddf',
        'dark-grayish-violet': '#8e8593',
        'very-dark-violet': '#21092f'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk','sans-serif']
      },
      backgroundImage: {
        'main-mobile': "url('/bg-main-mobile.png')",
        'main-desktop': "url('/bg-main-desktop.png')",
        'card-back': "url('/bg-card-back.png')",
        'card-front': "url('/bg-card-front.png')",
      }
    },
  },
  plugins: [],
}