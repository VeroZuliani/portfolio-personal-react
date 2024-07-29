import { Flex, Link, Menu } from "@chakra-ui/react"


const Header = () => {
    return(

        <Flex className='header' 
              w='100%' 
              justifyContent='space-between' 
              alignItems='center' 
              pos='fixed' 
              top='0' 
              zIndex={1}>

            <Link href="#hero" className="logo" 
                pt='20px' 
                pb='20px' 
                pl='43px' 
                pr='43px' 
                _hover={{ textDecoration: "none" }}
                color='text.oscuro' 
                fontFamily='font.french' 
                fontWeight='weight.500' 
                fontStyle='style.normal'> 
                VERO
            </Link>
            <Menu className="menu">
                <Link href="#contacto" className="buttonContacto" 
                    color='text.color' 
                    p='8px' 
                    textDecoration='none' 
                    borderRadius='5px' 
                    border='1px solid text.oscuro' 
                    mr='27px' 
                    fontFamily='font.roboto' 
                    fontWeight='weight.500' 
                    fontStyle='style.normal' 
                    cursor='pointer'
                    transition={{bg:'1s', color:'1s',}}
                    _hover={{
                        bg:'text.color',
                        color:'bg.white',
                    }}>
                Contacto
                </Link>
            </Menu>

        </Flex>

    )
}

export default Header