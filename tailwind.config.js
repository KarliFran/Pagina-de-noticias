module.exports = {
  purge: [false],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'serif':['Times New Roman']
    },
    extend: {
      backgroundImage: {
        'banner-latam': "url('https://i.postimg.cc/7b8xXNVS/banner-latam.jpg')",
        'banner-tech': "url('https://i.postimg.cc/BnxqQ1tJ/PQS-tecnologia-post-coronavirus.jpg')",
        'banner-culture': "url('https://i.postimg.cc/xCsLzKmr/programa-cultural-integra-actividades-organizadas-0-22-990-616.webp')",
        'banner-sports': "url('https://i.postimg.cc/SNJ71J4G/fb11527d-455e-4730-926e-78e64a1ec1c3.jpg')",
      },
      colors:{
        'nk-blue': '#3DB2FF',
        'nk-red': '#CD113B',
        'nk-yellow': '#F0A500',
        'nk-beigh':'#FFEDDA',
        'nk-gray':'#404040',
        'nk-aqua': '#316B83',
        'nk-green': '#61B15A',
        'nk-cintillo': 'rgba(0,0,0,0.6)',
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
        '200': '200px',
      },
      width:{
        '29': '29rem',
        '90': '22rem',
        '95': '23rem',
      },
      height:{
        '98':'26rem',
        'h-max': 'max-content',
      },
      inset:{
        '22': '22rem',
        '1/4': '40%',
        '98': '28rem',
        '1/6': '31%',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
