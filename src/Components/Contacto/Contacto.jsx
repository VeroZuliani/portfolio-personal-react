import { Flex, Box, Text, SimpleGrid} from "@chakra-ui/react"
import { element } from 'prop-types'
import InfoContacto from "../InfoContacto/InfoContacto"

const Contacto = () => {

    let infoContacto = [
        {
            "img":"/correo.svg",
            "info":"vero.zuliani92@gmail.com",
        },
        {
            "img":"/celular.svg",
            "info":"+54 9 351 2228356",
        },
        {
            "img":"/ubicacion.svg",
            "info":"Córdoba Capital, ARG",
        },
    ]

    return(

        <Flex class="contacto" id="contacto"
            bg='bg.black'
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            flexDirection='column'
            >

            <Box as='h1'
                color='text.color'
                pt='60px'
                fontFamily='font.playfair'
                fontWeight='600'
                fontSize={33}
                >Contacto
            </Box>
            <Text
                color='text.color'
                fontFamily='font.roboto'
                fontWeight='weight.400'
                fontStyle='style.normal'
                fontSize={16}
                >¡ Ponte en contacto para ver cómo puedo ayudarte hoy !
            </Text>

            <Flex class="info-contenedor"
                w='736px'
                h='390px'
                justifyContent='space-between'
                alignContent='center'
                alignItems='center'
                >
                <SimpleGrid class="info" columns={1} >
                    {infoContacto.map(elemento =>
                        <InfoContacto img={elemento.img} info={elemento.info}/>)
                    } 
                </SimpleGrid>
            </Flex>

        </Flex>

    )
}

export default Contacto