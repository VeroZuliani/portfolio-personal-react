import {Flex, Text, Image, Center} from '@chakra-ui/react'


const InfoContacto = ({img,info}) => {


    return(

        <Flex class="datos"  
            justifyContent='flex-start' 
            alignItems='center'
            mt='36px'
            mb='28px'
            >
            <Image mr='3px' w='54px' h='54px' src={img} alt=""/>
            <Text 
                color='text.color'
                fontFamily='font.roboto'
                fontWeight='weight.400'
                fontStyle='style.normal'
                fontSize={16}
                >{info}
            </Text>
        </Flex>
    )
}

export default InfoContacto
