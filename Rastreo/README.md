# Servicio de Rastreo
Es el servicio que se encarga de llevar un registro de todos los viajes, también la ubicación en tiempo real de la llegada de los pilotos con el cliente.


# Modelo
## Viaje
### Atributos
<!---->
| Nombre     | Descripción | Tipo    |
| :---          |    :----   |          :--- |
| idPiloto    | Id del piloto      | Int   |
| idCliente    | Id del usuario      | Int   |
| posX    | Posición en coordenada X      | Int   |
| posY    | Posición en coordenada Y     | Int   |
| estado    | Estado del viaje por si se cancela     | Int   |
<!---->

##Formato de retorno de pilotos

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
