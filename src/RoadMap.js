import React from "react";
import {
    Text,
    Image,
    VStack,
} from '@chakra-ui/react';

const RoadMap = () => {
return (

    <VStack spacing={2} p={10}>
        <Text textAlign='center' fontSize='38' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF'>
            Razix Engine
        </Text>

        <Text textAlign='center' fontSize='36' fontWeight="Bold" fontFamily="sans-serif" color='#FFFFFF'>
            RoadMap
        </Text>

        <Text textAlign='center' fontSize='16' fontWeight="100" fontFamily="sans-serif" color='#FFFFFF'>
            V.1.0.0.RC
        </Text>

        <Image src='https://github.com/Pikachuxxxx/Razix/blob/master/Docs/Architecture/RazixEngine-RoadMap-V1.0.0RC.png?raw=true'>
        </Image>
    </VStack>
    );
}

export default RoadMap;
