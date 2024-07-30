import {Box, Text, Image, Heading} from '@chakra-ui/react'

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from 'react'

const Card = ({img,titulo,descripcion}) => {

    const ref= useRef(null)
    const isInView= useInView(ref, { once:true })
    const controls = useAnimation()

    //Se activa cada vez que este a la vista
    useEffect(() => {
        //Si esta a la vista que realice la animacion
        if (isInView){
            controls.start("visible");
        }
    }, [isInView])



    return(
        <motion.div ref={ref} 
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.5 , delay: 0.20}}
            >
        
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Image w='104px' h='105px' src={img} alt=""/>

            <Heading as='h2' size='lg'
                color='text.txtTitulo' 
                mt='2px' 
                mb='14px'
                fontFamily='font.playfair' 
                fontSize={24} >
                {titulo}
            </Heading>
            
            <Text w="142px" 
                color='text.txtSubtitulo' 
                textAlign='center' 
                fontFamily='font.roboto' 
                lineHeight='1.2' 
                textIndent='15px'
                >{descripcion}
            </Text>
            
        </Box>
        </motion.div>
    )
}

export default Card