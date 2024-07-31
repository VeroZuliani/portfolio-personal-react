import Experiencia from "../Experiencia/Experiencia"
import Skills from "../Skills/Skills"
import { element } from 'prop-types'

import { Flex, Box, Heading, Wrap} from "@chakra-ui/react"



const Habilidades = () => {

    let experiencias = [
        {
            "img":"/utn.svg",
            "titulo":"UTN - Facultad Cordoba",
            "experiencia":"2011-2014 Programación"
        },
        {
            "img":"/telecom.svg",
            "titulo":"Telecom - Argentina",
            "experiencia":"2022-2022 Tester QA"
        },
        {
            "img":"/utn.svg",
            "titulo":"UTN - Facultad Cordoba",
            "experiencia":"2024-2024 Full Stack"
        },
        {
            "img":"/google.svg",
            "titulo":"Google Corporation",
            "experiencia":"2001-2004 UI/UX Designer"
        },
    ]

    let lenguaje = [
        {
            "leng":"HTML",
            "porc":"80"
        },
        {
            "leng":"CSS",
            "porc":"70"
        },
        {
            "leng":"JavaScript",
            "porc":"60"
        },
        {
            "leng":"Java",
            "porc":"90"
        },
    ]

    return(

        <Flex className="habilidades"
            h='100vh'
            bgColor='bg.black'
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            flexDirection='column'>

            <Heading as="h1"
                color='text.color'
                pt='60px'
                textAlign='center'
                fontFamily='font.playfair'
                fontSize={33}
                >Experiencias y Habilidades
            </Heading>


            <Wrap className="experiencias" 
                justify='space-evenly' 
                w='910px'
                h='176px'
                color='text.color'
                pt='27px'
                pr='82px'
                pb='80px'
                pl='47px'
                mt='40px'
                ml='40px'
                alignItems= 'center'
                >
                {experiencias.map(elemento => 
                    <Experiencia key={element.img} img={elemento.img} titulo={elemento.titulo} experiencia={elemento.experiencia}/>)
                }
            </Wrap>

            <Box className="skills" 
                w='910px'
                h='176px'
                ml='40px'
                pb='30px'
                mt='60px'
                >
                <Flex className="hab-contenedor"
                    justifyContent='space-between'
                    flexWrap='wrap'
                    pr='82px'
                    pl='47px'>
                    {lenguaje.map(elemento => 
                        <Skills key={element.leng} leng={elemento.leng} porc={elemento.porc}/>)
                    } 
                </Flex>
            </Box>

        </Flex>

    )
}

export default Habilidades