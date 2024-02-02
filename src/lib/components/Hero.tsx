"use client"

import {Flex, Text, Button, Image} from "@chakra-ui/react";
import {Gallery, Messages3, NoteText, People, UserOctagon, Video} from "iconsax-react";
import {Icon} from "@chakra-ui/icons";
import {Heading} from "~/lib/components/Heading";

export function Hero() {

    return (
        <Flex px={"5%"} pt={{base: "20%", lg: "10%"}} pb={"5%"} gap={{base: "50px", lg: "90px", xl: "110px"}} direction={"column"} >
            <Flex direction={{base: "column-reverse", lg: "row"}} align={{base: "flex-start", lg: "center"}} justify={"space-between"} gap={{base: 10, lg: 0}} >
                <Flex direction={"column"} maxW={{base: "100%", lg: "40%"}} gap={"1rem"} >
                    <Heading text={"It is all about connection and synergy ✨"} />
                    <Text fontSize={"1.2rem"} color={"gray.700"} >Rel8 aids the day-day administration of associations, professional bodies, alumni associations and companies.</Text>
                    <Button maxW={"55%"} variant={"cta"} >Request a demo!</Button>
                </Flex>
                <Image src={"/mockup.png"} w={{sm: "100%", lg: "50%"}} />
            </Flex>
            <Flex px={"5%"} mx={"-5%"} gap={"1rem"} align={"center"} flexWrap={"wrap"} >
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={People as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >CONNECT YOUR MEMBERS</Text>
                </Flex>
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={NoteText as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >POST NEWS & PUBLICATIONS</Text>
                </Flex>
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={Gallery as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >SHARE AMAZING MEMORIES</Text>
                </Flex>
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={Messages3 as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >SECURED GENERAL AND PRIVATE CHATS</Text>
                </Flex>
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={Video as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >EVENTS & VIRTUAL MEETINGS</Text>
                </Flex>
                <Flex _hover={{bg: "primary.sub___"}} px={"1rem"} py={".7rem"} gap={".7rem"} align={"center"} borderRadius={"10px"} boxShadow={"2xl"} >
                    <Icon as={UserOctagon as any} color={"secondary.sub_"} fontSize={"1.5rem"} />
                    <Text fontSize={{base: ".7rem", lg: ".9rem"}} fontWeight={"bold"} display={{base: "none", lg: "block"}} >MEMBERSHIP ADMINISTRATION</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
