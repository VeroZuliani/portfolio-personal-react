import { Box, Divider, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box className="autor" bg='bg.black' color='text.oscuro' pt='5px' pb='2px' >

            <Divider orientation='vertical' border='1px' borderStyle='solid' borderColor='text.oscuro'/>
            <Flex className="nom" 
                justifyContent='space-between' 
                pr='20px' 
                pl='20px' 
                pt='15px'
                pb='15px'
                fontFamily='font.roboto' 
                fontWeight='weight.400' 
                fontStyle='style.normal' 
                fontSize={14}> 
                <Text color='text.oscuro'>&copy; Verónica Zuliani 2024</Text>
                <Text color='text.oscuro'>Todos los derechos reservados.</Text>
            </Flex> 

        </Box>

    )
}

export default Footer