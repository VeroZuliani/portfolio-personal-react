import { Flex, Box, Text, SimpleGrid, Button, FormControl, FormLabel, Input, Textarea, FormHelperText} from "@chakra-ui/react"
import { element } from 'prop-types'
import InfoContacto from "../InfoContacto/InfoContacto"
import { Formik } from 'formik'
import { motion } from "framer-motion"


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

                
                <Formik initialValues={{
                    nom:'',
                    correo:'',
                    asunto:'',
                    msj:''
                }}
                
                validate={(values)=>{
                    let errors={}

                    if(!values.nom){
                        errors.nom='Debe ingresar nombre'
                    }
                   
                    if (!values.correo) {
                        errors.email = 'Debe ingresar correo electrónico'
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
                        errors.email = 'Correo inválido'
                    }

                    if(!values.asunto){
                        errors.asunto='Debe ingresar asunto'
                    }
                    if(!values.msj){
                        errors.msj='Debe ingresar un mensaje'
                    }
                    return errors
                }}
                

                onSubmit={(values)=>{
                    console.log(values)
                }}
                >

                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit, 
                    isSubmitting
                }) => (

                <Box className="form-contenedor" w='350px' h='390px' mr='46px' onSubmit={handleSubmit}>

                    <Flex className="form" flexDirection='column' overflow='hidden' >

                        <FormControl className="form-grupo">
                            <FormLabel className="label-nom" for=""></FormLabel>
                            <Input className="input-nom" type="text" placeholder="Nombre " required name="nom"
                                _placeholder={{ color: 'text.formLabel' }}
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                value={values.nom}
                                onChange={handleChange}
                            />
                            {errors.nom?<FormHelperText color='text.color'>{errors.nom}</FormHelperText>:null}
                        </FormControl>

                        <FormControl className="form-grupo">
                            <FormLabel className="label-email" for=""></FormLabel>
                            <Input className="input-email" type="email" placeholder="Correo Electrónico" name="correo"
                                _placeholder={{ color: 'text.formLabel' }}
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                value={values.correo}
                                onChange={handleChange}
                            />
                            {errors.correo?<FormHelperText color='text.color'>{errors.correo}</FormHelperText>:null}
                        </FormControl>

                        <FormControl className="form-grupo" >
                            <FormLabel className="label-asunto" for=""></FormLabel>
                            <Input className="input-asunto"type="text" placeholder="Asunto" name="asunto"
                                _placeholder={{ color: 'text.formLabel' }}
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                value={values.asunto}
                                onChange={handleChange}
                            />
                            {errors.asunto?<FormHelperText color='text.color'>{errors.asunto}</FormHelperText>:null}
                        </FormControl>

                        <FormControl className="form-grupo">
                            <FormLabel className="label-msj" for="" ></FormLabel>
                            <Textarea className="input-msj" type="text" placeholder="Mensaje" name="msj"
                                _placeholder={{ color: 'text.formLabel' }}
                                variant='flushed' 
                                color='text.color' 
                                borderColor='text.color' 
                                focusBorderColor='text.color'
                                value={values.msj}
                                onChange={handleChange}
                            />
                            {errors.msj?<FormHelperText color='text.color'>{errors.msj}</FormHelperText>:null}
                        </FormControl>

                    </Flex>

                    <motion.div whileTap={{scale: 0.90}} transition={{ duration: 0.1 }}>
                        <Button className="enviar" type="submit"  disabled={isSubmitting}
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
                    </motion.div>
                </Box>

                )}
                </Formik>

            </Flex>
        </Flex>

    )
}

export default Contacto