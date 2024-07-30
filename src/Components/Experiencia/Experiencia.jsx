import {Box, Text, Image, Heading, WrapItem} from '@chakra-ui/react'

const Experiencia = ({img,titulo,experiencia}) => {

    return(

        <WrapItem className="expe-contenedor">   

            <Image pl='80px' w='60px' h='60px' src={img} alt=""/>
            <Box className="exp" display='inline-block' >
                <Heading as='h3'
                    fontSize={16}
                    fontFamily='font.cactus'
                    fontWeight='weight.400'
                    fontStyle='style.normal'
                    >{titulo}
                </Heading>
                <Text
                    textDecoration='underline'
                    textUnderlineOffset='5px'
                    lineHeight='0'
                    fontFamily='font.roboto'
                    fontWeight='weight.400'
                    fontStyle='style.normal'
                    fontSize={14}
                    >{experiencia}
                </Text>
            </Box> 
            
        </WrapItem> 
    )
}

export default Experiencia