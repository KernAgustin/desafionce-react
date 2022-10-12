import React, { useState } from 'react'
import { Button, Container, Flex, FormControl, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useCart } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Order() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idCompra, setIdCompra] = useState('');
  const navegar = useNavigate()

  const { cart, clear, cartTotal } = useCart()

  function terminarCompra(e) {
    e.preventDefault();
    if (!name || !phone || !email){
      return
    }
    let order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      cart: cart,
      total: cartTotal(),
    }
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({ id }) => {
      setIdCompra(id);
    });
    clear();
  }

  return (
    <Container maxW={"full"} py="10rem">
      <Flex justifyContent={"center"} alignItems={"center"}>

        {!idCompra
          ?
          <form action="submit" onSubmit={terminarCompra}>
            <VStack maxW={"lg"} gap={"10px"}>
              <Heading size='lg'>Ingresa tus datos para finalizar</Heading>
              <FormControl isRequired>
                <Input value={name} onChange={(e) => setName(e.target.value)} variant='filled' placeholder='Ingresa tu nombre.' size='md' type={'text'} />
              </FormControl>
              <FormControl isRequired>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} variant='filled' placeholder='Ingresa tu correo electronico.' size='md' type={'email'} />
              </FormControl>
              <FormControl isRequired>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} variant='filled' placeholder='Ingresa tu teléfono.' size='md' type={'number'} />
              </FormControl>

              <Button type={'submit'} alignSelf="center" p={"10px"} size="1.4rem" colorScheme='#010224' variant='outline' _hover={{
                background: "#1E8449",
                color: "#ffffff"
              }} >
                Terminar compra</Button>


            </VStack>
          </form>
          : <VStack>
            <Heading size='lg'>¡Gracias por tu compra!</Heading>
            <Text fontSize='lg'>Tu orden se registró correctamente con el id: {idCompra}</Text>
            <Button background='#44a970e0' color='#ffffff' onClick={() => navegar('/')} _hover={{background: '#1E8449'}} my="2rem">Volver a la tienda</Button>
          </VStack>}
      </Flex>
    </Container>
  )
}
