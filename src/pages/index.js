import React from "react"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles'

// Define Theme Options
const theme = {
    color: {
      bg: '#0c0f26',
      light: '#171934',
      yellow: '#faca31',
      link: '#7678fb'
    },
    transition: 'all .3s linear'
  }


const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            Hello Bangladesh
        </ThemeProvider>
    )
}


export default Index;