import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'

export default function Item({ item }) {

  const {img, name, price, id} = item

  const navegar = useNavigate()

  return (
    <Container p={"1rem"} my={"1rem"} _hover={{
      background: "#f3f3f3",
    }} >
      <Flex direction='column' gap='10px'>
      <Image
        height='600px'
        objectFit='cover'
        src={img}
      />
      <Heading as='h4' size='sm'>{name}</Heading>
      
      <Text fontSize='lg'>${price}</Text>
      <Button alignSelf="center" rightIcon={<BsArrowRightShort size="1.4rem"/>} colorScheme='#010224' variant='outline' _hover={{
      background: "#1E8449",
      color: "#f4f4f6"
    }} onClick={() => navegar(`/producto/${id}`)}>
      Ver producto</Button>
      </Flex>
    </Container>
  )
}
