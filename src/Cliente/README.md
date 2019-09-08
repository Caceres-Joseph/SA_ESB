# Servicio Cliente
Es el servicio que se encarga de llevar un registro de todos los clientes que utilicen la plataforma


# Modelo
## Cliente
### Atributos
<!---->
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| id    | Id del cliente      | Int   |
| nombre    | Nombre del usuario      | String   |
| password    | Contraseña del usuario      | String   |
| edad    | Edad del usuario      | int   |
<!---->

# Rutas 
## Obtener ubicación del cliente (Post)
### Parámetros
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| nombre    | Nombre del usuario      | String   |
| password    | Contraseña     | Int   | 
```
http://localhost:3100/obtenerUbicacion
```

## Listar clientes disponibles (Get)

Listado de todos los clientes registrados en la base de datos
```
http://localhost:3100/getListaClientes
```