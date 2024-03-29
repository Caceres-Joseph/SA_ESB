# Tarea SA
Implementación de un ESB con microservicios
### Autor: Jhosef Omar Cáceres Aguilar
### Carné: 201513696

# Microservicios
## Clientes | ```Puerto:3100```
Encargado del control de clientes, puede obtener más detalles del servicio en /Cliente/README.md
## Pilotos | ```Puerto:3200```
Servicio que tiene el control de los pilotos disponibles para poder realizar un viaje, puede obtener más detalles del servicio en /Piloto/README.md
## Rastreo | ```Puerto:3300```
Servicio que se encarga de llevar el control de los viajes que se realicen y el control de la ubicación de la llegada del piloto al usuario final, puede obtener más detalles del servicio en /Rastreo/README.md
## ESB | ```Puerto:3000```
Se encarga de orquestar todos los servicios para que el usuario pueda solicitar un Uber y que el piloto llegue al destino del usuario, puede obtener más detalles del servicio en /ESB/README.md



# Rutas 
## Solicitar un Uber (Post)
### Parámetros
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| nombre    | Nombre del usuario      | String   |
| password    | Contraseña     | Int   | 
```
http://localhost:3000/buscarUber
```

## Ubicación del piloto (Post)
### Parámetros
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| nombre    | Nombre del usuario      | String   |
| password    | Contraseña     | Int   | 
```
http://localhost:3000/obtenerEstadoLlegadaPiloto
```
## Obtener Logs (Get) 
Registro de todo lo que se realiza en el ESB
```
http://localhost:3000/getLogs
```



# Usuario disponibles
```
[
    {
        "id": 0,
        "nombre": "Cliente0",
        "edad": 0,
        "password": 1
    },
    {
        "id": 1,
        "nombre": "Cliente1",
        "edad": 1,
        "password": 2
    },
    {
        "id": 2,
        "nombre": "Cliente2",
        "edad": 2,
        "password": 3
    },
    {
        "id": 3,
        "nombre": "Cliente3",
        "edad": 3,
        "password": 4
    },
    {
        "id": 4,
        "nombre": "Cliente4",
        "edad": 4,
        "password": 5
    },
    {
        "id": 5,
        "nombre": "Cliente5",
        "edad": 5,
        "password": 6
    },
    {
        "id": 6,
        "nombre": "Cliente6",
        "edad": 6,
        "password": 7
    },
    {
        "id": 7,
        "nombre": "Cliente7",
        "edad": 7,
        "password": 8
    },
    {
        "id": 8,
        "nombre": "Cliente8",
        "edad": 8,
        "password": 9
    },
    {
        "id": 9,
        "nombre": "Cliente9",
        "edad": 9,
        "password": 10
    }
]
```

# Nota 
Puede cambiar los puertos y la dirección del servidor en el archivo direcciones.js
# Diagrama solución 
![Diagram](diagrama.png)