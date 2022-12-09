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
    Spacer
} from '@chakra-ui/react';
import {BsWindows} from "react-icons/bs";

import DownloadItemCard from './DownloadItemCard'

const Downloads = () => {
return (

    <VStack spacing={2} p={10}>
        <Text textAlign='center' fontSize='38' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF'>
            Archived
        </Text>

        <Text textAlign='center' fontSize='36' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF'>
            Builds
        </Text>

        <Text textAlign='center' fontSize='16' fontWeight="100" fontFamily="sans-serif" color='#FFFFFF'>
            The below list has the entire releases history of Razix Engine RC, Beta and Alpha as well as Development build archives.
        </Text>

        <Link align='center' fontSize={14} fontWeight="100" color="#FFFFFF" href='https://github.com/Pikachuxxxx/Razix/blob/master/Docs/CHANGELOG.md' isExternal>
            <Text p={5} as='u'>
                    View Changelog
            </Text>
        </Link>

        <Card bgColor='#000000FF' w='60%' borderRadius={20}>
            <VStack spacing={0}>
                <HStack verticalAlign='center'>
                    <Text align='center' verticalAlign='center' textAlign='center' fontSize='18' color='#FFFFFF'>
                    <Icon p={5} as={BsWindows} align='center'/>
                        Windows
                    </Text>
                </HStack>

                <DownloadItemCard color='#9BFF4D' version='V.1.0.0' releaseStage='RC'/>
                <DownloadItemCard color='#FF4D4D' version='V.1.0.0' releaseStage='Beta'/>
                <DownloadItemCard color='#FF4D4D' version='V.1.0.0' releaseStage='Alpha'/>
                <DownloadItemCard color='#FFED4D' version='V.1.0.0' releaseStage='Dev'/>
                <DownloadItemCard color='#FFED4D' version='V.1.0.0' releaseStage='Dev'/>
                <DownloadItemCard color='#FF4D4D' version='V.1.0.0' releaseStage='Alpha'/>

            </VStack>
        </Card>


    </VStack>
    );
}

export default Downloads;
