import React from "react";
import ReactDOM from "react-dom";
import {
    ChakraProvider,
    Box,
    Divider,
    Text,
    Flex,
    Spacer,
    Avatar,
    Heading,
    Stack,
    HStack,
    VStack,
    Link,
    Button,
    Menu,
    Image,
    ExternalLinkIcon
} from '@chakra-ui/react';

import {BsWindows} from "react-icons/bs";
import {FaArrowRight} from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";

import Header from "./Header"
import theme from './theme'

import bg from './images/bg2.png';

function Home() {
  return (
        <Box p={20} w="100%">
            <VStack w='100%' align='center'>
                <VStack w='80%' backgroundSize='100%' backgroundImage={bg}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat" borderRadius="50px"
                      spacing={5}
                      >
                    <Text textAlign='center' fontSize='60' fontWeight="Bold" fontFamily="sans-serif" bgGradient='linear(to-r, #ffffff, #2279FC)' bgClip='text'>
                        Redefining
                    </Text>
                    <Text textAlign='center' fontSize='72' fontWeight="Bold" fontFamily="sans-serif" bgGradient='linear(to-br, #FFBF25, #FF3200FF)' bgClip='text'>
                        AAA
                    </Text>
                    <Text p={20} textAlign='center' w='70%' fontSize='20' fontWeight="light" fontFamily="sans-serif" color="#CCCCCCFF">
                        Razix is the next generation research engine that will redefine AAA graphics, with a goal of rendering 1B+ triangles.
                        Razix intends to take advantage of the latest rendering and lighting research techniques such as Virtualized Geometry and ReSTIR based GI
                        solutions to render the most beautiful worlds with supersonic speed.
                    </Text>

                    <Button boxShadow='xl' w='45%' leftIcon={<BsWindows/>} backgroundColor="#FF3131">
                        Download Razix Engine V.1.0.0.RC
                    </Button>

                    <Link align='center' fontSize={14} color="#FFFFFF" fontWeight="Light" href='https://github.com/Pikachuxxxx/Razix/blob/master/Docs/ReleaseNotes.md' isExternal>
                        <Text p={5} as='u'>
                                Release Notes
                        </Text>
                    </Link>

                    <Link align='center' fontSize={14} color="#FFFFFF" fontWeight="Light" href='/Downloads'>
                        <Text p={5} as='u'>
                                Archive Builds
                        </Text>
                    </Link>

                    <Spacer p={25} />

                </VStack>

                <Spacer p={25} />

                <VStack w='100%'>
                    <HStack spacing={20} align='center' justify='auto'>
                        <VStack w='50%' align='center'>
                            <Text textAlign='center' fontSize='24' fontWeight="Light" fontFamily="sans-serif" bgGradient='linear(to-r, #7527D8, #D8B500)' bgClip='text'>
                                State Of the Art Global Illumination
                            </Text>

                            <Divider orientation='horizontal' w='25%'/>

                            <Text textAlign='center' fontSize='16' fontWeight="Light" fontFamily="sans-serif" color='#AAAAAAFF'>
                                Advanced Ray Tracing and GI using customized state of the art algorithms like ReSTIR and DDGI.
                            </Text>
                        </VStack>

                        <VStack w='50%' align='center'>
                            <Text textAlign='center' fontSize='24' fontWeight="Light" fontFamily="sans-serif" bgGradient='linear(to-r, #E1FB00, #3CE001)' bgClip='text'>
                                Next-Gen Rendering using Virtualized Geometry
                            </Text>

                            <Divider orientation='horizontal' w='25%'/>

                            <Text textAlign='center' fontSize='16' fontWeight="Light" fontFamily="sans-serif" color='#AAAAAAFF'>
                                Virtualized Geometry and Mega Textures implemented using Mesh Shaders and Visibility Buffer enables rendering of film quality assets with very high poly count of upto 1B+ triangles.
                            </Text>
                        </VStack>

                        <VStack w='50%' align='center'>
                            <Text textAlign='center' fontSize='24' fontWeight="Light" fontFamily="sans-serif" bgGradient='linear(to-r, #03FFFF, #71BDD7, #FD6CF2)' bgClip='text'>
                                In-House Editor & Tools using QT
                            </Text>

                            <Divider orientation='horizontal' w='25%'/>

                            <Text textAlign='center' fontSize='16' fontWeight="Light" fontFamily="sans-serif" color='#AAAAAAFF'>
                                In-house Editor and tools enables rich world building, such as AssetPacker, Memory manager, FX editor are designed speciically to take advantage of next gen GPUs.
                            </Text>
                        </VStack>
                    </HStack>
                </VStack>

                <Spacer p={25} />

                <Heading align='center' w='20%' fontSize={36} fontWeight='Bold' bgGradient='linear(to-r, #AAAAAA, #FF9900)' bgClip='text' fontFamily="sans-serif">
                    About
                    <Divider p={2} orientation='horizontal' w='100%'/>
                </Heading>

                <Text p={5} color="#FFFFFF" align='left' fontSize='18' fontWeight="Light" fontFamily="sans-serif" color='#DDDDDD'>
                    Razix is a High Performance Research Engine with emphasis on experimenting with different rendering techniques.
                    Razix supports a wide range of Renderers with extreme emphasis on scene optimization and implementing state-of-the art rendering techniques.
                    The engine architecture supports a very educational and optimized design. It acts a sandbox for designing production practices and is scalable.
                    Razix is a multiplatform and cross API engine, supports Windows, MacOSX, Linux and uses Vulkan, and DirectX12.
                </Text>

                <Text p={5} color="#FFFFFF" fontSize='18' fontWeight="Light" fontFamily="sans-serif" color='#DDDDDD'>
                    Razix also provides rich set of UI based and CLI tools for world building using an in-house Editor (built using QT), asset packing & profiling etc.
                     For more information check out the full list of features by clicking below.
                </Text>

                <Text p={5} color="#FFFFFF" fontSize='18' fontWeight="Light" color='#DDDDDD'>
                    ⚠️ WARNING: Currently Razix is WIP and the renderer is undergoing major design overhaul hence nothing will make sense, check the RoadMap below for release information
                </Text>

                <Link href='/Features'>
                <Button boxShadow='xl' rightIcon={<FaArrowRight/>} w='100%' backgroundColor="#FFA500" href="/Features">
                        Features
                </Button>
                </Link>

            </VStack>
        </Box>
  );
}

export default Home;
