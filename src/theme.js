// theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  

const theme = extendTheme({ 
    config,
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: '#109CEB',
        gray: '#393939',
        lightGray: '#a5a5a5',
        mediumGray: '#7e7e7e'
        // ...
    } 
})

export default theme;


/* fonts: {
            heading: 'Poppins',
            body: 'Poppins',
        },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: '#109CEB',
        gray: '#393939',
        // ...
    } */