import React from "react";
import {
    Center,
    Text,
    Image,
    VStack,
    HStack
} from '@chakra-ui/react';

const Blog = () => {
return (

    <Center>
        <HStack align='center' spacing={2} p={10}>
            <Text p={5} textAlign='center' fontSize='64' fontWeight="Bold" fontFamily="sans-serif" color='#D22B2B'>
                Coming
            </Text>
            <Text p={5} textAlign='center' fontSize='64' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF' bg="#D22B2B" borderRadius={0}>
                Soon
            </Text>

        </HStack>
    </Center>
    );
}

export default Blog;
