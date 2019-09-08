# Servicio de Rastreo
Es el servicio que se encarga de llevar un registro de todos los viajes, también la ubicación en tiempo real de la llegada de los pilotos con el cliente.

# Rutas 
## Registrar un viaje (Post)
### Parámetros
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| idCliente    | Id del usuario     | Int   |
| idPiloto    | Id del piloto     | Int   |
| posX_cliente    | Ubicación del cliente en X      | Int   |
| posY_cliente    | Ubicación del cliente en Y     | Int   | 
| posX_piloto    | Ubicación del piloto en X      | Int   |
| posY_piloto    | Ubicación del piloto en Y     | Int   | 
```
http://localhost:3300/registrarViaje
```
 
## Listar los rastreos en ejecución (Get)

Listado de todos los pilotos registrados en la base de datos
```
http://localhost:3300/getListaViajes
```

