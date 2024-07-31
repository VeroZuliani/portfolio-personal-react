import Card from '../Card/Card'
import { element } from 'prop-types'
import {Box, Text, Flex, Heading} from '@chakra-ui/react'


const SobreMi = () => {

    let sobreMI = [
        {
            "img":"/diseñar.svg",
            "titulo":"Diseñar",
            "descripcion":"Planificar, probar, mantener y documentar software."
        },
        {
            "img":"/desarrollar.svg",
            "titulo":"Desarrollar",
            "descripcion":"Brindar soluciones para satisfacer necesidades del cliente."
        },
        {
            "img":"/soporte.svg",
            "titulo":"Soporte",
            "descripcion":"Brindar soporte informático."
        },
    ]

 
    return(

        <Box className="sobreMi" bg='bg.white' textAlign='center'>
            
            <Heading as='h1' 
                color='text.txtTitulo' 
                pt='60px' 
                fontFamily='font.playfair'
                fontSize={33}>
                Sobre Mi
            </Heading> 

            <Text className="presentacion"
                mt='31px'
                mr='150px'
                mb='42px'
                ml='150px'
                textIndent='30px'
                fontSize={18}
                fontFamily='font.roboto'
                fontWeight='weight.400'
                fontStyle='style.normal'
                color='text.txtSubtitulo'
                lineHeight='2'
                textAlign='center'>
                Soy una programadora apasionada por el desarrollo web y de aplicaciones  utilizando las últimas tecnologías y mejores prácticas de desarrollo para desempeñarme como Full Stack.
                <br/>
                Mi objetivo es participar en proyectos versátiles que me desafíen y permitan expandir mis habilidades.
            </Text>

            <Flex className="sobreMi-contenedor"
                justifyContent='space-evenly' 
                alignItems='flex-start' 
                pr='86px' 
                pl='86px' 
                mb='100px'
                >
                {sobreMI.map(elemento => 
                    <Card key={element.img} img={elemento.img} titulo={elemento.titulo} descripcion={elemento.descripcion} />)
                }
            </Flex>

        </Box>
    
    )
}

export default SobreMi