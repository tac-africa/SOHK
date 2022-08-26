module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {  
      backgroundImage: {
        'mobileBG': "url('/projects/mobileHome.png')",
        'desktopBG': "url('https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg')",
      },
      colors: {
        'main_blue': '#17466C', //Blue
        'light_blue': '#27557A', //Light_Blue
        'lighter_blue': '#17466C', //Lighter_Blue
        'lightest_blue': '#477E8F', //Lightest_Blue
        'transparent_blue': '#6E9AA8', //Transperent_Blue
        'sweet_blue': '#393E46', 
        'deep_blue': '#06295D',
        'dark_blue': '#0B3658', //Dark_Blue
        'main_grey': '#E8F0F6', //Grey
        'light_grey': '#787878', //Light_Grey
        'lighter_grey': '#F2F6FA', //Lighter_Grey 
        'main_white': '#FFFFFF', //Grey
        'main_yellow': '#FFC34E', //Yellow
        'primary': '#0275d8',
        'see_tru': 'rgba(5, 0, 32, 0.697), rgba(5, 0, 32, 0.697)',
        'overlay': 'rgba(5, 0, 32, 0.697)'
      },
      fontSize: { 
        '4md': ['2.5rem', '2.7rem']
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '70vh': '70vh',
        '90vh': '90vh',
      },
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin')
]
}