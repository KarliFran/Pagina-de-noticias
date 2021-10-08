module.exports = {
  purge: [false],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'nk-blue': '#3DB2FF',
        'nk-red': '#FF2442',
        'nk-yellow': '#FFB830',
        'nk-beigh':'#FFEDDA',
        'nk-gray':'#404040'
      },
      gridTemplateColumns:{
        'auto-fill': 'repeat(auto-fill, minmax(20rem,1fr))'
      },
      gridRow:{
        'row-edit': '1 / span 2',
        'row-edit-second': 'span 1 / span 2',
      },
      gridAutoRows:{
        'edit': '14rem',
      },
      minWidth:{
        '300': '300px',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
