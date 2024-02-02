"use client"

import {Button, Flex, Grid, Text} from "@chakra-ui/react";


export function Demo() {

    return (
        <Grid px={{base: "5%", lg: "17.5%"}} py={{base: "10%", lg: "5%"}} templateColumns={{base: "1fr",  lg: "1fr 1fr 1fr"}} gap={"2rem"} >
            <Flex p={"2rem"} borderRadius={"10px"} boxShadow={"xl"} direction={"column"} align={"center"} gap={"2rem"} >
                    <Text fontSize={"1.5rem"} fontWeight={"bold"} >FREE DEMO!</Text>
                    <Text color={"gray.500"} textAlign={"center"} >Let us give you a taste of what other organizations are enjoying on Rel8</Text>
                    <Button variant={"cta"} w={"100%"} >Book a demo</Button>
            </Flex>

            <Flex borderColor={"primary.sub"} borderWidth={2} p={"2rem"} borderRadius={"10px"} boxShadow={"3xl"} direction={"column"} align={"center"} gap={"2rem"} >
                <Text fontSize={"1.5rem"} fontWeight={"bold"} >SETUP YOUR ACCOUNT</Text>
                <Text color={"gray.500"} textAlign={"center"} >Start using our solution now! It takes just few steps to get started!</Text>
                <Button variant={"cta"} w={"100%"} >Get started</Button>
            </Flex>

            <Flex p={"2rem"} borderRadius={"10px"} boxShadow={"xl"} direction={"column"} align={"center"} gap={"2rem"} >
                <Text fontSize={"1.5rem"} fontWeight={"bold"} >NEED TO MAKE ENQUIRIES?</Text>
                <Text color={"gray.500"} textAlign={"center"} >Reach out to us. We are ready to provide you with adequate information!</Text>
                <Button variant={"cta"} w={"100%"} >Contact sales</Button>
            </Flex>
        </Grid>
    )
}
