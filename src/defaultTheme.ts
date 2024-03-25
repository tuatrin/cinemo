import { createTheme, ThemeOptions } from '@mui/material/styles'

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1440,
      xl: 2560,
    },
  },
} as ThemeOptions)

export default defaultTheme
