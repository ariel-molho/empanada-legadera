# Proyecto Empanada Legadera

El nombre del proyecto es Empanada Legadera y está hecho para practicar habilidades de ReactJS. La funcionalidad va a ser sólamente para que un grupo de amig@s pueda armar un pedido de empanadas sin necesidad de hacer una lista que tiene que ser organizada por una persona.

## Tech
Para el proyecto se ha usado:
- [ReactJS](https://reactjs.org/).
- [React Bootstrap](https://react-bootstrap.github.io/).
- [Ant Design](https://ant.design/).
- [Firebase](https://firebase.google.com/) para backend (autenticación y base de datos).

## Funcionalidad

Para los usuarios el proyecto cuenta con dos tabs en el nav bar: 
1. Historial: en esta pantalla cada usuario va a poder ver el historial de sus pedidos (path="/historial").
2. Nuevo Pedido: en esta pantalla el usuario puede hacer un nuevo pedido (path="/nuevo-pedido").
Para estas pantallas el usuario debe haberse registrado o logueado previamente.
También se cuenta con una pantalla 404.
3. Administrador: Para el administrador hay una pantalla adicional para ver todos los pedidos de todos los usuarios. Tiene un selector por fecha para filtrar la información.

A futuro se planea:
- Para el administrador la posibilidad de linkear directo un nuevo pedido con el Whatsapp del restaurante o alguna forma de exportar la info.

## Variables de Entorno

Solicitar archivo .env con las variables de entorno (para linkear con Firebase y permisos de administrador).