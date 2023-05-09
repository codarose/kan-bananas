/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
     
       fontFamily: {
          sans: ['Plus Jakarta Sans', 'sans-serif'], 
      },
      extend: {
        colors: {
          'black': "#000112",
          'darkGrey': "#2B2C37",
          'darkGreyTwo':"#20212C",
          'darkLines':"#3E3F4E",
          'lightLines': "#E4EBFA",
          'medGray': "#828FA3",
          'lightGray': "#F4F7FD",
          'mainPurple': "#635FC7",
          'mainPurpleHover': "#A8A4FF",
          'red': "#EA5555",
          'redHover': "#FF9898",
          'todo': "#49C4E5",
          'doing': "#8471F2",
          'done': "#67E2AE",
      },
      letterSpacing: {
        'extrawide': '2.4px',
      }
      },
  },
  plugins: [],
}

