"use client"

import {Button, Flex, FormControl, FormLabel, Input, Select, Text} from "@chakra-ui/react";
import {Heading} from "~/lib/components/Heading";
import {getCountries} from "~/lib/helpers/getCountries";
import {useEffect, useState} from "react";

export function OrgInfo() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(data => setCountries((data?.map((each: any) => each?.name?.common) || [])?.sort((a: any, b: any) => b - a)));
    }, [])

    return (
        <Flex px={"5%"} minH={"90vh"} direction={"column"} justify={"center"} gap={"3rem"}>
            <Heading text={"Tell us about your organization"}/>

            <Flex direction={"column"} gap={"1.5rem"} maxW={{base: "100%", lg: "45%", xl: "35%"}}>
                <FormControl>
                    <FormLabel>Organization name</FormLabel>
                    <Input variant={"flushed"}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select variant={"flushed"}>
                        {
                            countries && countries?.map((each, idx) => <option value={"each"} key={idx}>{each}</option>)
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Type</FormLabel>
                    <Select variant={"flushed"}>
                        <option>NGO</option>
                        <option>For Profit</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Size of members</FormLabel>
                    <Input variant={"flushed"} type={"number"}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Unique acronym</FormLabel>
                    <Input variant={"flushed"} />
                </FormControl>
            </Flex>
            <Button maxW={{base: "100%", lg: "45%", xl: "35%"}}>Submit</Button>
        </Flex>
    )
}
