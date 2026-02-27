/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1920px',
        },
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
      },
      colors: {
        // Original colors
        lemon: '#e2c649', // Lemon yellow - adjust as needed
        'midnight-blue': '#00002f', // Midnight Blue (assuming #312B2B from #312B2 - please verify)
        midnight: '#00002f', // Alias for midnight-blue
        
        // New custom colors
        'clean-white': '#ffffff',
        'lemon-yellow': '#ed3c3c', // Note: This appears red, verify if correct
        'olive-gold': '#a38f36',
        'blueish-gray': '#a4b0be',
        'darik-blueish-grey': '#a4b0be', // Same as blueish-gray
      },
      fontSize: {
        'h1': ['115px', { 
          lineHeight: '1.2',
          fontWeight: '900', // Black
          fontFamily: 'Onest, sans-serif'
        }],
        'h2': ['75px', { 
          lineHeight: '1.2',
          fontWeight: '700', // Bold
          fontFamily: 'Onest, sans-serif'
        }],
        'h3': ['55px', { 
          lineHeight: '1.2',
          fontWeight: '700', // Bold
          fontFamily: 'Onest, sans-serif'
        }],
        'h4': ['45px', { 
          lineHeight: '1.2',
          fontWeight: '700', // Bold
          fontFamily: 'Onest, sans-serif'
        }],
        'h5': ['35px', { 
          lineHeight: '1.2',
          fontWeight: '700', // Bold
          fontFamily: 'Onest, sans-serif'
        }],
        'copytext': ['21px', { 
          lineHeight: '1.5',
          fontWeight: '500', // Medium
          fontFamily: 'Onest, sans-serif'
        }],
        'copytext-paragraph': ['21px', { 
          lineHeight: '1.5',
          fontWeight: '500', // Medium
          fontFamily: 'Onest, sans-serif'
        }],
      },
    },
  },
  plugins: [],
}

