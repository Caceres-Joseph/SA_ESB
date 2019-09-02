'user strict';



/*
+----------------------------------------
| Lista de clientes 
+---------------------------------------- 
| Clientes disponibles en la base de datos
|
*/
var Clientes = [];

for (let i = 0; i < 10; i++) {
    Clientes.push(
        new Cliente({
            id: i,
            nombre: "Cliente" + i,
            edad: i,
            password: i + 1
        })
    )
}

/*
+----------------------------------------
| Modelo
+---------------------------------------- 
| Atributos de los clientes
|
*/
var Cliente = function (client) {
    this.id = client.id;
    this.nombre = client.nombre;
    this.edad = client.edad;
    this.password = client.password;
};

/*
+----------------------------------------
| Get Clientes 
+---------------------------------------- 
| Retorno de todos los clientes
|
*/
Cliente.getAllCustomers = function getAllCustomers(result) {

    return Clientes;
};


module.exports = Cliente;