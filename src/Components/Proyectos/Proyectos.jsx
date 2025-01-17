import { Flex, Heading , Tabs, TabList, Tab, TabPanels, TabPanel, Link, Image, Center, Wrap, WrapItem, Button} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"


const Proyectos = () => {
    
    const [mostrar, setMostrar] = useState(true);

    return(

        <Flex className="proyectos"
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            flexDirection='column'
            bg='bg.white'
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
                    <Tab className="btn btn-boton1" border='1px' borderStyle='solid' borderColor='text.formLabel' borderRadius='5px 0 0 5px' _selected={{bg:'text.color'}}>Todo el trabajo</Tab>
                    <Tab className="btn btn-boton2" border='1px' borderStyle='solid' borderColor='text.formLabel' _selected={{bg:'text.color'}}>Diseño Web</Tab>
                    <Tab className="btn btn-boton3" border='1px' borderStyle='solid' borderColor='text.formLabel' _selected={{bg:'text.color'}}>Diseño Mobile</Tab>
                    <Tab className="btn btn-boton4" border='1px' borderStyle='solid' borderColor='text.formLabel' borderRadius='0 5px 5px 0' _selected={{bg:'text.color'}}>Diseño de Producto</Tab>
                </TabList>

                <TabPanels className="proyectos-contenedor" h='415px'>
                        
                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px' w='700px' h='400px' mt='20px'>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Link href="https://verozuliani.github.io/image-based-web-project/" isExternal><Image w='150px' h='150px' borderRadius='5px' src="/proyecto1.png" alt=""/></Link>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Link href="https://verozuliani.github.io/components-freelance-platform/" isExternal><Image w='150px' h='150px' borderRadius='5px' src="/proyecto2.png" alt=""/></Link>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Link href="https://verozuliani.github.io/xero-bank-loans/" isExternal><Image w='150px' h='150px' borderRadius='5px' src="/proyecto3.png" alt=""/></Link>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Link href="https://verozuliani.github.io/photo-gallery/" isExternal><Image w='150px' h='150px' borderRadius='5px' src="/proyecto4.png" alt=""/></Link>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Link href="https://verozuliani.github.io/API-Star-Wars/" isExternal><Image w='150px' h='150px' borderRadius='5px' src="/proyecto5.png" alt=""/></Link>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Image w='150px' h='150px' borderRadius='5px' src="/proyecto6.svg" alt=""/>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                        </Wrap>
                    </TabPanel>
                    
                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px' w='700px' h='400px' mt='20px'>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Image w='150px' h='150px' borderRadius='5px' src="/proyecto6.svg" alt=""/>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Image w='150px' h='150px' borderRadius='5px' src="/proyecto3.svg" alt=""/>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Image w='150px' h='150px' borderRadius='5px' src="/proyecto4.svg" alt=""/>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                        </Wrap>
                    </TabPanel>

                    <TabPanel>
                        <Wrap justify='space-between'  spacing='40px' w='700px' h='400px' mt='20px'>
                            <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                                <WrapItem>
                                    <Center>
                                        <Image w='150px' h='150px' borderRadius='5px' src="/proyecto5.svg" alt=""/>
                                    </Center>
                                </WrapItem>
                            </motion.div>
                        </Wrap>

                    </TabPanel>

                </TabPanels>
            </Tabs>



            <Flex className={mostrar ? "show-element" : null}>
                {mostrar && 
                    <Wrap justify='space-between'  spacing='40px' w='700px' h='400px' mt='20px'>
                    <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                        <WrapItem>
                            <Center>
                                <Image w='150px' h='150px' borderRadius='5px' src="/proyecto3.svg" alt=""/>
                            </Center>
                        </WrapItem>
                    </motion.div>
                    <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                        <WrapItem>
                            <Center>
                                <Image w='150px' h='150px' borderRadius='5px' src="/proyecto4.svg" alt=""/>
                            </Center>
                        </WrapItem>
                    </motion.div>
                    <motion.div whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>
                        <WrapItem>
                            <Center>
                                <Image w='150px' h='150px' borderRadius='5px' src="/proyecto5.svg" alt=""/>
                            </Center>
                        </WrapItem>
                    </motion.div>
                </Wrap>
                }
            </Flex>


            <motion.div whileTap={{scale: 0.85}}>
                <Button className="buttonProyectos" onClick={() => setMostrar(!mostrar)}
                    mt='20px'
                    mb='14px'
                    p='5px'
                    borderRadius='5px'
                    border='1px'
                    borderStyle='solid'
                    borderColor='text.formLabel'
                    bg='bg.white'
                    fontFamily='font.playfair'
                    fontWeight='weight.400'
                    transition={{bg:'1s', color:'1s',}}
                    _hover={{
                            bg:'text.color',
                            color:'text.formLabel',
                    }}> 
                    {mostrar ? `Cargar Menos` : `Cargar Mas`}
                </Button> 
            </motion.div>

        </Flex>

    )
}

export default Proyectos