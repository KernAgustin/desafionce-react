import { Center, Container, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productos = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products")
    getDocs(productos).then((result) =>{
      const lista = result.docs.map((product) => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(lista)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));

  }, [category])

  return (
    <Container maxW="full" maxH="full" py="6rem">
      {loading
        ? <Center h='20rem'><Spinner alignSelf='center' size='xl' /></Center>
        : <ItemList items={items}
        />}
    </Container>
  )
}
