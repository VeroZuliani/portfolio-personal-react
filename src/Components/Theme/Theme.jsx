import { extendTheme} from '@chakra-ui/react'

//Personalizar estilos
const theme = extendTheme({
    colors:{
        bg: {
            black: '#111111',
            white: '#FCFCFC',
        },
    
        text: {
            color: '#fdc800',
            txtTitulo: '#343434',
            txtSubtitulo: '#7d7d7d',
            formLabel: '#404040',
            oscuro: '#a08208',
        },
    },
    fonts:{
        font: {
            cactus: "Cactus Classical Serif, serif",
            french: "IM Fell French Canon, serif",
            roboto: "Roboto, sans-serif",
        },
        weight: {
            400: '400',
            500: '500',
            700: '700',
        },
        style:{
            normal: 'normal',
        },
    },
});

export default theme