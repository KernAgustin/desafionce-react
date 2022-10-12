
# Roco Macetas - App React

**Rococo Macetas** es un ecommerse, el cual fue realizado con **react**. El mismo cuenta con dos distintas **categorias** de productos, pudiendo acceder a ellas por diferentes rutas. Por otro lado, tambien cuenta con un apartado donde esta el **carrito**, en donde se muestran todos los productos seleccionados. y por ultimo, un **checkout** en donde se validan los datos de cliente para finalizar la compra.

![Alt Text](https://github.com/KernAgustin/imagenes-videos-gifs/blob/master/Rococo-Macetas-Proyecto.gif?raw=true)


## Características de la app
- Al elegir una categoría sólo se mostrarán los artículos de esa categoría.
- No se pueden comprar más artículos de los que hay en stock.
- La orden de compra se guarda en firebase.
- la app obtiene los productos desde una base de datos (firebase).

## Instalacion

Para instalar el proyecto con npm:
```
  git clone 
  npm install
  npm start
```
- debera crear una cuenta en firebase y crear un proyecto.
- Luego crear una base de datos para el proyecto con las siguientes colecciones:
  - productos:
   ```
   {
      "name": "string",
      "category": "string",
      "description": "string",
      "price": "number",
      "img": "string",
      "stock": "number"
   }
  ```

## Librerias

 - [Chakra UI](https://chakra-ui.com)
 - [React Router DOM](https://www.npmjs.com/package/react-router-dom)