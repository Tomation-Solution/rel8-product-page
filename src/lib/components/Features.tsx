"use client"

import {Flex, Text, Grid, GridItem} from "@chakra-ui/react";
import {Gallery, Messages3, NoteText, People, UserOctagon, Video} from "iconsax-react";
import {Icon} from "@chakra-ui/icons";

interface FeatureCardProps {
    name: string;
    desc?: string | undefined;
    icon: any;
}

export function Features() {

    const features: FeatureCardProps[] = [
        {
            name: "CONNECT YOUR MEMBERS",
            icon: People as any
        },
        {
            name: "POST NEWS & PUBLICATIONS",
            icon: NoteText as any
        },
        {
            name: "SHARE AMAZING MEMORIES",
            icon: Gallery as any
        },
        {
            name: "SECURED GENERAL AND PRIVATE CHATS",
            icon: Messages3 as any
        },
        {
            name: "EVENTS & VIRTUAL MEETINGS",
            icon: Video as any
        },
        {
            name: "MEMBERSHIP ADMINISTRATION",
            icon: UserOctagon as any
        }
    ]

    return (
        <Grid px={{base: "5%", lg: "17.5%"}} py={{base: "10%", lg: "5%"}} templateColumns={{base: "1fr", lg: "1fr 1fr"}} gap={"50px"} >
            {features.map((feature, idx) =>  (
                <GridItem key={idx} >
                    <FeatureCard {...feature} key={feature.name} />
                </GridItem>
            ))}
        </Grid>
    )
}

function FeatureCard(props: FeatureCardProps) {

    return (
        <Flex direction={{base: "column", lg: "row"}} align={{base: "flex-start", lg: "center"}} gap={"1rem"} >
            <Flex borderColor={"secondary.sub__"} borderRadius={"100%"} borderWidth={"3px"} p={"2rem"} justify={"center"} align={"center"} >
                <Icon as={props.icon} color={"secondary.sub"} fontSize={"3rem"} />
            </Flex>
            <Flex direction={"column"} align={"flex-start"} >
                <Text fontWeight={"bold"} color={"gray.700"} >{props.name}</Text>
                <Text color={"gray.500"} textAlign={"justify"} >{props.desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" +
                    "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</Text>
            </Flex>
        </Flex>
    )
}
