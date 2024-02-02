"use client"

import {Flex, Text, Button, Heading, Image} from "@chakra-ui/react";
import {Gallery, Messages3, NoteText, People, UserOctagon, Video} from "iconsax-react";
import {Icon} from "@chakra-ui/icons";

export function Clients() {

    return (
        <Flex px={{base: "5%", lg: "17.5%"}} py={"10%"} direction={{base: "column", lg: "row"}} gap={{base: "40px", lg: 0}} align={"center"} justify={"center"} >
            <Flex direction={"column"} align={{base: "center", lg: "flex-end"}} gap={{base: "10px", xl: "15px"}} w={{base: "100%", lg: "40%"}}>
                <Text fontSize={{base: "1.5rem", lg: "2rem", xl: "2.6rem"}} fontWeight={"bold"} color={"primary.sub"} textAlign={{base: "center", lg: "right"}} >
                    YOU ARE NOT ALONE!
                </Text>
                <Text fontSize={"1rem"} color={"gray.700"} maxW={{base: "100%", lg: "70%"}} textAlign={{base: "center", lg: "right"}} >Many organizations trust us and are enjoying our solution.<br />You can be one of them 😌</Text>
            </Flex>
            <Flex w={{base: "100%", lg: "60%"}} flexWrap={"wrap"} gap={{base: "10px", xl: "15px"}}>
                <Image src={"client-nimn.svg"} w={{base: "6rem", lg: "9rem"}}/>
                <Image src={"client-man.png"} w={{base: "6rem", lg: "9rem"}}/>
            </Flex>
        </Flex>
    )
}

