import { Button, Center, Container, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import ItemResume from './CartItem';

export default function Cart() {

  const { cart, clear, cartTotal } = useCart()

  const navegar = useNavigate()

  return (
      <Container maxW="full" maxH="full" h="100vh" py="6rem" >
        {!cart.length 
          ? <Center>
            <VStack>
            <Text fontSize='2xl' my="1rem">Tu carrito está vacío</Text>
            <Button background='#6393ff' color='#ffffff' onClick={() => navegar('/')} _hover={{background: '#1a67ff'}} my="2rem">Volver a la tienda</Button>
            </VStack>
            </Center>
          : <VStack>
          <Text fontSize='4xl' my="1rem">Tu carrito</Text>
          {cart.map((item) => (
            <ItemResume key={item.id} item={item} />
          ))}
          <Text fontSize='lg' my="2rem">Total a pagar: ${cartTotal()}</Text>
          <HStack>
          <Button colorScheme='gray' my="2rem" onClick={clear}>Vaciar Carrito</Button>
          <Button background='#6393ff' onClick={() => navegar(`/order`)} color='#ffffff' _hover={{background: '#1a67ff'}} my="2rem">Terminar Compra</Button>
          </HStack>
          </VStack>
        }
      </Container>
  )
}
