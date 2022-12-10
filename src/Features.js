import React from "react";
import {
    Center,
    Text,
    Image,
    VStack,
    HStack
} from '@chakra-ui/react';

const Features = () => {
return (

    <Center>
        <HStack align='center' spacing={2} p={10}>
            <Text p={5} textAlign='center' fontSize='64' fontWeight="Bold" fontFamily="sans-serif" color='#FFBF00'>
                Coming
            </Text>
            <Text p={5} textAlign='center' fontSize='64' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF' bg="#FFBF00" borderRadius={0}>
                Soon
            </Text>

        </HStack>
    </Center>
    );
}

export default Features;
