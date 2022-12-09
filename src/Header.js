import React from "react";
import { ReactNode } from 'react';
import { Link as ReachLink } from "@reach/router"
import {
  Box,
  Text,
  Flex,
  Spacer,
  Avatar,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from "./images/RazixLogo128.ico";

const Links = ['Home', 'Features', 'Downloads', 'Blog', 'RoadMap'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    _selected={{
              color: 'white',
              boxShadow: 'none',
          }}
    href={"#/" + children}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
            <HStack spacing='10px' alignItems={'center'} justifyContent={'center'}>
                <Link href='/razix-website/' style={{ textDecoration: 'none' }}>
                    <Box><Image src={Logo} alt='Dan Abramov' boxSize="50px"/></Box>
                </Link>
                <Link href='/razix-website/' style={{ textDecoration: 'none' }}>
                    <Text fontWeight="Semi Bold" fontSize='34' color="#FFB536"> Razix </Text>
                </Link>
                <Link href='/razix-website/' style={{ textDecoration: 'none' }}>
                    <Text as="i" fontWeight="light" fontSize='26' color="6B6B6B"> Engine</Text>
                </Link>
            </HStack>

            <Spacer />

            <HStack
              as={'nav'}
              spacing={12}
              display={{ base: 'none', md: 'flex' }}
              >

              {Links.map((link) => (
                <NavLink >
                    {link}
                </NavLink>

              ))}

            </HStack>
        </Flex>
      </Box>
    </>
  );
}
