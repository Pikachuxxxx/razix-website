import React from "react";
import ReactMarkdown from 'react-markdown'
import {
    Text,
    Stack,
    VStack,
    HStack,
    Link,
    Card,
    Box,
    Icon,
    Spacer,
    Flex,
    Button
} from '@chakra-ui/react';
import {BsWindows} from "react-icons/bs";

export default function DownloadItemCard(props) {

return (

    <Card {...props} w='100%' borderRadius={0} bgColor='#282D32' borderColor='#282D32' borderTopColor='#222222' borderBottomColor='#222222' borderWidth={1.2}>
        <HStack >
            <VStack p={5}>
                <HStack align='left'>
                    <Text align='left' fontSize='24' fontWeight="100" fontFamily="sans-serif" color='#FFFFFF'>
                        Razix - {props.version} -
                    </Text>

                    <Text align='left' fontSize='24' fontWeight="100" fontFamily="sans-serif" color={props.color}>
                        {props.releaseStage}
                    </Text>
                </HStack>

                <HStack align='left'>
                    <Text placement='left' fontSize='12' fontWeight="100" fontFamily="sans-serif" color='#878787'>
                        January 25 // 2022 | 1:45.21 | 145.6 MB
                    </Text>
                </HStack>
            </VStack>

            <Spacer />

            <VStack p={5}>
                <Button align='right' boxShadow='xl' w='60%' borderRadius={40} backgroundColor="#FFA63E" color="#000000" fontWeight="SemiBold">
                    Download
                </Button>
                <Text textAlign='center' fontSize='12' fontWeight="100" fontFamily="sans-serif" color='#878787'>
                    md5 : ba411cafee2f0f702572369da0b765e2
                </Text>
            </VStack>
        </HStack>
    </Card>
    );
}
