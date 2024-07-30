import { Flex, Heading , Tabs, TabList, Tab, TabPanels, TabPanel, Link, Image, Center, Wrap} from "@chakra-ui/react"
import { motion } from "framer-motion"


const Proyectos = () => {

    return(

        <Flex className="proyectos"
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            flexDirection='column'
            bg='bg.white'
            fontFamily='font.playfair'
            >

            <Heading as='h1' 
                color='text.txtTitulo' 
                pt='40px' 
                fontFamily='font.playfair'
                fontSize={33}
                >
                Proyectos
            </Heading>

            <Tabs variant='unstyled'>

                <TabList className="btn-grupo" p='5' display='flex' justifyContent='center' alignItems='center' cursor='pointer' fontFamily='font.playfair'>
                    <Tab className="btn btn-boton1" border='1px' borderStyle='solid' borderColor='text.formLabel' borderRadius='5px 0 0 5px' _selected={{bg:'text.color'}} transition={{bg:'1s',}} _hover={{bg:'text.color',}}>Todo el trabajo</Tab>
                    <Tab className="btn btn-boton2" border='1px' borderStyle='solid' borderColor='text.formLabel' _selected={{bg:'text.color'}} transition={{bg:'1s',}} _hover={{bg:'text.color',}}>Diseño Web</Tab>
                    <Tab className="btn btn-boton3" border='1px' borderStyle='solid' borderColor='text.formLabel' _selected={{bg:'text.color'}} transition={{bg:'1s',}} _hover={{bg:'text.color',}}>Diseño Mobile</Tab>
                    <Tab className="btn btn-boton4" border='1px' borderStyle='solid' borderColor='text.formLabel' borderRadius='0 5px 5px 0' _selected={{bg:'text.color'}} transition={{bg:'1s',}} _hover={{bg:'text.color',}}>Diseño de Producto</Tab>
                </TabList>

                <TabPanels className="proyectos-contenedor">
                        
                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px'
                            w='700px' h='400px' mt='20px' 
                            >
                            <motion.WrapItem  
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center>
                                    <Link href="https://verozuliani.github.io/image-based-web-project/" isExternal><Image w='150px' h='150px' src="/proyecto1.png" alt=""/></Link>
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='green.200'>
                                    <Link href="https://verozuliani.github.io/components-freelance-platform/" isExternal><Image w='150px' h='150px' src="/proyecto2.png" alt=""/></Link>
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='tomato'>
                                    <Link href="https://verozuliani.github.io/xero-bank-loans/" isExternal><Image w='150px' h='150px' src="/proyecto3.png" alt=""/></Link>
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    <Link href="https://verozuliani.github.io/photo-gallery/" isExternal><Image w='150px' h='150px' src="/proyecto4.png" alt=""/></Link>
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    <Link href="https://verozuliani.github.io/API-Star-Wars/" isExternal><Image w='150px' h='150px' src="/proyecto5.png" alt=""/></Link>
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 6
                                </Center>
                            </motion.WrapItem>
                        </Wrap>

                    </TabPanel>
                    
                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px'
                            w='700px' h='400px' mt='20px' 
                            >
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 1
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 2
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 3
                                </Center>
                            </motion.WrapItem>
                        </Wrap>
                    </TabPanel>

                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px'
                            w='700px' h='400px' mt='20px'
                            >
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 1
                                </Center>
                            </motion.WrapItem>
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 2
                                </Center>
                            </motion.WrapItem>
                        </Wrap>
                    </TabPanel>

                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px'
                            w='700px' h='400px' mt='20px'
                            >
                            <motion.WrapItem 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                transition={{ duration: 0.3 }}
                                >
                                <Center w='150px' h='150px' bg='blue.200'>
                                    Box 1
                                </Center>
                            </motion.WrapItem>
                        </Wrap>
                    </TabPanel>

                </TabPanels>
            </Tabs>


            
            <motion.button class="buttonProyectos" 
                mt='20px'
                mb='14px'
                p='5'
                borderRadius='5px'
                border='1px'
                borderStyle='solid'
                borderColor='text.formLabel'
                // cursor='pointer'
                bg='bg.white'
                transition={{bg:'1s', colorScheme:'1s',}}
                _hover={{
                        bg:'text.color',
                        colorScheme:'text.formLabel',
                }}
                whileHover={{ scale: [null, 1.1, 1.1] }}
                > 
                Cargar Mas
            </motion.button> 

        </Flex>

    )
}

export default Proyectos