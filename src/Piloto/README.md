# Servicio de Pilotos
Es el servicio que se encarga de llevar un registro de todos los pilotos, también la forma de contactar con ellos.


# Modelo
## Piloto
### Atributos 
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| idPiloto    | Id del piloto      | Int   |
| nombre    | Nombre del piloto      | String   |
| posX    | Posición en coordenada X      | Int   |
| posY    | Posición en coordenada Y     | Int   |
 
# Rutas 
## Obtener ubicación del cliente (Post)
### Parámetros
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| posX    | Ubicación del cliente en X      | Int   |
| posY    | Ubicación del cliente en X     | Int   | 
```
http://localhost:3200/buscarPilotoDisponible
```


## Listar pilotos disponibles (Get)

Listado de todos los pilotos registrados en la base de datos
```
http://localhost:3200/getListaPilotos
```
### Formato de retorno de pilotos
```
[
    {
        "idPiloto": 0,
        "nombre": "Piloto0",
        "placas": 0,
        "posX": 6999,
        "posY": 6730
    },
    {
        "idPiloto": 1,
        "nombre": "Piloto1",
        "placas": 1,
        "posX": 4777,
        "posY": 9439
    },
]
```