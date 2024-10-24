import React from 'react'
import { Container, Box, Text, Tabs, Link} from "@chakra-ui/react"
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'


const Homepages = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box
          d='flex'
          justifyContent='center'
          p={3}
          bg={'white'}
          w={"100%"}
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text fontSize="4xl" fontFamily="Work sans" color={"black"} textAlign={"center"}>Talk-A-Tive</Text>
        </Box>
        <Box bg={"white"} w={"100%"} p={4} borderRadius={"lg"} borderWidth={"1px"}>
          <Tabs.Root defaultValue="members">
            <Tabs.List border={"0px"} bg={"#554BF2"} overflow={"hidden"} borderRadius={"6px"}>
              <Tabs.Trigger value="members" asChild d="flex" justifyContent={"center"}>
                <Link unstyled href="#members" width={"50%"}>
                  Login
                </Link>
              </Tabs.Trigger>
              <Tabs.Trigger value="projects" asChild d="flex" justifyContent={"center"}>
                <Link unstyled href="#projects" w={"50%"} >
                  Sign Up
                </Link>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="members" color={'black'}>
              <Login/>
            </Tabs.Content>
            <Tabs.Content value="projects" color={'black'}>
              <SignUp/>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
    </Container>
  )
}


export default Homepages