import { Flex, Box, Text, SimpleGrid, Button, FormControl, FormLabel, Input, Textarea} from "@chakra-ui/react"
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

        <Flex className="contacto" id="contacto"
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
                mt='20px'
                mb='20px'
                >¡ Ponte en contacto para ver cómo puedo ayudarte hoy !
            </Text>

            <Flex className="info-contenedor"
                w='736px'
                h='390px'
                justifyContent='space-between'
                alignContent='center'
                alignItems='center'
                mb='20px'
                >
                <SimpleGrid className="info" columns={1} >
                    {infoContacto.map(elemento =>
                        <InfoContacto img={elemento.img} info={elemento.info}/>)
                    } 
                </SimpleGrid>


                <Box className="form-contenedor" w='350px' h='390px' mr='46px'>

                    <Flex className="form" flexDirection='column' overflow='hidden'>

                        <FormControl className="form-grupo">
                            <FormLabel className="label-nom" for="">Nombre</FormLabel>
                            <Input className="input-nom" type="text" placeholder=" " required 
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                            />
                        </FormControl>

                        <FormControl className="form-grupo">
                            <FormLabel className="label-email" for="">Correo Electrónico</FormLabel>
                            <Input className="input-email" type="email" placeholder=" " required 
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                            />
                        </FormControl>

                        <FormControl className="form-grupo" >
                            <FormLabel className="label-asunto" for="">Asunto</FormLabel>
                            <Input className="input-asunto"type="text" placeholder=" " required 
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                pos='relative'
                            />
                        </FormControl>

                        <FormControl className="form-grupo">
                            <FormLabel className="label-msj" for="">Mensaje</FormLabel>
                            <Textarea className="input-msj" type="text" placeholder=" " required  
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                pos='relative'
                            />
                        </FormControl>

                    </Flex>

                    <Button className="enviar" type="submit" 
                        mt='20px'
                        pt='5px'
                        pr='20px'
                        pb='5px'
                        pl='20px'
                        border='none'
                        borderRadius='5px'
                        bg='text.color'
                        fontFamily='font.roboto'
                        fontWeight='weight.400'
                        fontStyle='style.normal'
                        fontSize={14}
                        transition={{bg:'1s', color:'1s',}}
                        _hover={{
                            bg:'text.formLabel',
                            color:'text.color',
                        }}
                        >Enviar
                    </Button>

                </Box>

            </Flex>
        </Flex>

    )
}

export default Contacto