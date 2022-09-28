import { Container, Heading, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiTrash } from 'react-icons/fi'


export default function CartItem({ item }) {

  const { imgUrl, name, quantity, price } = item

  return (
    <Container maxW="container.md" maxH="full" py="1rem" my="1rem" border={"1px solid "} borderRadius={4}>
      <HStack justifyContent='space-between' alignItems='center' >
        <Image
          height='50px'
          width='50px'
          objectFit='cover'
          src={imgUrl}
        />
        <Heading as='h4' size='sm'>{name}</Heading>

        <Text fontSize='lg'>${price}</Text>
        <Text fontSize='lg'>x{quantity}</Text>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Send email'
          icon={<Icon as={FiTrash} h="20px" w="20px" color='#ff2400'/>}
        />
      </HStack>
    </Container>
  )
}
