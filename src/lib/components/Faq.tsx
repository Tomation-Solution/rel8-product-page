"use client"

import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Text} from "@chakra-ui/react";
import {Box} from "iconsax-react";

export function Faq() {

    return (
        <Flex px={{base: "5%", lg: "17.5%"}} py={"8%"} gap={{base: "40px", lg: "70px"}} direction={"column"}>
            <Accordion>
                <AccordionItem>
                    <AccordionButton>
                        <Flex w={"100%"} justify={"space-between"} >
                            <Text>Question 1</Text>
                            <AccordionIcon />
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Flex w={"100%"} justify={"space-between"} >
                            <Text>Question 1</Text>
                            <AccordionIcon />
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Flex w={"100%"} justify={"space-between"} >
                            <Text>Question 1</Text>
                            <AccordionIcon />
                        </Flex>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    )
}
