import {Box, Text, Flex, Slider, SliderTrack, SliderThumb, SliderFilledTrack } from '@chakra-ui/react'

const Skills = ({leng, porc}) => {

    return(

        <Box className="lenguaje" pr='80px' pl='82px'>
            <Flex className="leng" justifyContent='space-between'>
                <Box as='h3'
                    fontFamily='font.roboto'
                    fontWeight='weight.400'
                    fontStyle='style.normal'
                    fontSize={14}
                    pt='5px'
                    ml='10px'
                    mb='2px'
                    color='text.color'
                    >{leng}
                </Box>
                <Text
                    color='text.color'
                    fontFamily='font.roboto'
                    fontWeight='weight.400'
                    fontStyle='style.normal'
                    fontSize={14}
                    >{porc}% 
                </Text>
            </Flex>
            
            <Slider className="progress" 
                w='204px'
                ml='10px'
                h='3px'
                pos='relative'
                mb='48px'
                isReadOnly='true' 
                cursor='default'
                defaultValue={porc}
                >
                
                <SliderTrack bg='text.formLabel' >
                    <SliderFilledTrack  bg='text.color' /> 
                </SliderTrack>
                <SliderThumb boxSize={3} bg='text.color'>
                    <Box /> 
                </SliderThumb>
            </Slider>
        </Box>

    )
}

export default Skills