/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
    },
    extend: {
        colors: {
            active: '#004b99'
        }
    },
    spacing: {
      '1': '8px',
      '2': '10px',
      '3': '12px',
      '4': '14px',
      '5': '16px',
      '6': '20px',
    }
  },
  corePlugins: {
    // the preflight enables global normalization for all styles. Which means
    // that all h1, a, ul... tags will be stripped out of their default styles.
    // also it will remove all inline css. For more information https://tailwindcss.com/docs/preflight
    // In our case this will not work due to the complexity of the project  
      preflight: false
  },
  plugins: [],
}

