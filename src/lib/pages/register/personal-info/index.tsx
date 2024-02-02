"use client"

import {Button, Flex, FormControl, FormLabel, Input, Text} from "@chakra-ui/react";
import {Heading} from "~/lib/components/Heading";
import {useRouter} from "next/navigation";

export function PersonalInfo() {
    const router = useRouter();

    return (
        <Flex px={"5%"} minH={"90vh"} direction={"column"} justify={"center"} gap={"3rem"} >
            <Heading text={"Tell us about you"} />

            <Flex direction={"column"} gap={"1.5rem"} maxW={{base: "100%", lg: "45%", xl: "35%"}} >
                <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input variant={"flushed"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Last name</FormLabel>
                    <Input variant={"flushed"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input variant={"flushed"} placeholder={"Mr, Mrs..."} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input variant={"flushed"} type={"email"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Phone number (Optional)</FormLabel>
                    <Input variant={"flushed"} type={"tel"} placeholder={"+1 xxx xxx-xxxx"} />
                </FormControl>
                <Text>By clicking proceed, you agree to our use of your personal information as stated here. You also agree to our Terms and Conditions</Text>
            </Flex>
            <Button maxW={{base: "100%", lg: "45%", xl: "35%"}} onClick={() => router.push("/register/org-info")} >Proceed</Button>
        </Flex>
    )
}
