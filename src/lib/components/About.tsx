"use client"

import {Flex, Text, Button, Heading} from "@chakra-ui/react";
import {Gallery, Messages3, NoteText, People, UserOctagon, Video} from "iconsax-react";
import {Icon} from "@chakra-ui/icons";

export function About() {

    return (
        <Flex px={"5%"} py={{base: "10%", lg: "5%"}} gap={{base: "10px", lg: "15px", xl: "20px"}} direction={"column"} align={"center"} bg={"primary.sub___"}>
            <Text fontSize={{base: "1.5rem", lg: "2rem", xl: "2.6rem"}} fontWeight={"bold"} color={"gray.700"}>
                IT IS ALL YOU NEED!
            </Text>
            <Text fontSize={"1rem"} color={"gray.600"} maxW={{base: "100%", lg: "50%"}} textAlign={"justify"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Flex>
    )
}

