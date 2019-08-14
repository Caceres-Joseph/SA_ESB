
# Orquestador
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
