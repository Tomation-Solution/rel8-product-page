import {Flex, Text} from "@chakra-ui/react";

export function Footer() {

    return (
        <Flex px={"5%"} py={"2rem"} justify={"center"} borderTopWidth={1} w={"100%"} >
            <Text fontSize={"1rem"} color={"gray.500"} >Copyright ©Workplace Stars Africa - All rights reserved.</Text>
        </Flex>
    )
}