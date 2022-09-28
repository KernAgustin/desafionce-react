import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, doc,  getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function ItemDetailContainer() {

  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    // debemos pasar la base de datos y la coleccion
    const coleccionProductos = collection(db, "products")
    // hacemos una referencia hacia un documento en particular
    const referenciaDoc = doc(coleccionProductos, id)
    // traemos un documento
    getDoc(referenciaDoc)
    .then((result) => {
      setItemDetail({
        id: result.id,
        ...result.data()
      })
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));

  }, [])

  return (
    <Container maxW={"full"} py="1rem">
      {loading ? 'cargando detalle del producto...' : <ItemDetail itemDetail={itemDetail}/>}
    </Container>
  )
}
