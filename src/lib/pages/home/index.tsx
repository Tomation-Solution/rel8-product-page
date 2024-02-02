"use client"

import {Flex, Box} from '@chakra-ui/react';
import {Hero} from "~/lib/components/Hero";
    import {About} from "~/lib/components/About";
import {Clients} from "~/lib/components/Clients";
import {Features} from "~/lib/components/Features";
import {Demo} from "~/lib/components/Demo";
import {Faq} from "~/lib/components/Faq";

function Home() {

  return (
    <Box my={{base: "7%", lg: "3%"}} >
        <Hero />
        <About />
        <Clients />
        <Features />
        <Demo />
        <Faq />
    </Box>
  );
};

export default Home;
