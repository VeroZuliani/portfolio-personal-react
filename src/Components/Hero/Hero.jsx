import { Box, Flex, Text } from "@chakra-ui/react"

const Hero = () => {
    return(

        <Box className="hero" id="hero">

            <Flex className="foco-contenedor" 
                w='100%' 
                h='100vh' 
                justifyContent='center' 
                alignItems='center'> 

                <Flex className="foco"
                    w='100%'
                    h='100%'
                    bgImage='url("../verozuliani.jpg")'
                    bgPosition='center'
                    bgRepeat='no-repeat'
                    bgSize='cover'
                    justifyContent='center'
                    alignItems='center'
                    pos='relative'>
            

                    <Flex className="foco foco-back"
                        justifyContent='flex-start'
                        h='100vh'
                        alignItems='flex-end'
                        // _before={{
                        //     content:"",
                        //     w:'100%',
                        //     h:'100%',
                        //     bg:'rgba(4, 3, 3, .8)',
                        //     pos:'absolute',
                        //     top:'0',
                        //     left:'0',
                        // }}
                        >

                        <Flex className="hero-contenedor" 
                            color='text.color'
                            justifyContent='flex-end'
                            flexDirection='column'
                            h='100vh'
                            ml='86px'
                            zIndex={2}>

                            <Box as="h2"
                                fontFamily='font.french'
                                fontWeight='weight.400'
                                fontStyle='style.normal'
                                fontSize={30}>
                                Hola!
                            </Box>

                            <Box as="h1"
                                fontFamily='font.french'
                                fontWeight='900'
                                fontStyle='style.normal'
                                fontSize={50}
                                lineHeight='0px'
                                mt='18px'
                                mb='10px'>
                                Soy Verónica Zuliani
                            </Box>

                            <Text
                                color='bg.white'
                                fontFamily='font.roboto'
                                fontWeight='weight.400'
                                fontStyle='style.normal'
                                fontSize={40}
                                mb='14px'>
                                Programadora
                            </Text>
                        </Flex>

                    </Flex>

                    <Box className="foco foco-front"
                        pos='absolute'
                        top='0'
                        clipPath='circle(14em at center)'
                        >
                    </Box>

                    <Box className="foco-circulo"
                        pos= 'absolute'
                        w= '28em'
                        h= '28em'
                        borderRadius= '50%'
                        border='5px'
                        borderStyle='solid'
                        borderColor='text.color'>
                    </Box>
                </Flex>
            </Flex>
        </Box>


    )
}

export default Hero