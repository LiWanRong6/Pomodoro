// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          colors: {
            background: '#779899',
            primary: "#779899",
            secondary: '#A66B58'
          }
        }
      }

    }
  }
)
