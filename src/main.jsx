import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { ChakraProvider} from '@chakra-ui/react'
import theme from './Components/Theme/Theme'

import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import SobreMi from './Components/SobreMi/SobreMi'
import Habilidades from './Components/Habilidades/Habilidades'
import Proyectos from './Components/Proyectos/Proyectos'
// import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <Header/>
      <Hero/>
      <SobreMi/>
      <Habilidades/>
      <Proyectos/>
      {/* <Contacto/> */}
      <Footer/> 
    </ChakraProvider>
   
  </React.StrictMode>,
)
