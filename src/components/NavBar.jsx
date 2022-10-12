import React from 'react'
import CartWidget from './CartWidget'
import {Flex, HStack, Image, Text } from '@chakra-ui/react'
import {Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Flex zIndex="1" position="fixed" px="80px" py="20px" width="full" bg="white" alignItems="flex-end" justifyContent="space-between">
                <Link to="/">
                    <Image
                        height='7.5rem'
                        objectFit='cover'
                        src= '/assets/logo.jpg'
                        alt='logotipo'
                    />
                </Link>
            <Flex alignItems="flex-end">
                <HStack color="#010224" spacing="40px">
                    <Link to="/categoria/macetas">
                    <Text fontSize='sm'>Macetas</Text>
                    </Link>
                    <Link to="/categoria/plantas">
                    <Text fontSize='sm'>Plantas</Text>
                    </Link>
                </HStack>
            </Flex>
            <CartWidget />
        </Flex>
    )
}
