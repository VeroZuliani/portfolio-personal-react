import {Box, Text, Image, Heading} from '@chakra-ui/react'

const Card = ({img,titulo,descripcion}) => {

    return(

        <Box>
            <Image w='104px' h='105px' src={img} alt=""/>

            <Heading as='h2' size='lg'
                color='text.txtTitulo' 
                mt='2px' 
                mb='14px'
                fontFamily='font.french'  //CAMBIAR LETRA fontFamily y fontWeight
                fontWeight='700'
                fontStyle='style.normal' >
                {titulo}
            </Heading>
            
            <Text w="142px" 
                color='text.txtSubtitulo' 
                textAlign='center' 
                fontFamily='font.roboto' 
                fontWeight='weight.400' 
                fontStyle='style.normal' 
                lineHeight='1.2' 
                textIndent='15px'
                >{descripcion}
            </Text>
        </Box>

    )
}

export default Card