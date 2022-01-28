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