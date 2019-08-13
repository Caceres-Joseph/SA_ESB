'use strict';



var ip = "http://localhost"
var dir = function () {
}

dir.portEsb = function () {
    return 3000;
}

dir.portCliente = function () {
    return 3100;
}

dir.portPiloto = function () {
    return 3200;
}

dir.portRastreo = function () {
    return 3300;
}


dir.ipEsb = function () {
    return ip + ":" + dir.portEsb() + "/";
};
dir.ipCliente = function () {
    return ip + ":" + dir.portCliente() + "/";
};

dir.ipPiloto = function () {
    return ip + ":" + dir.portPiloto() + "/";
};
dir.ipRastreo = function () {
    return ip + ":" + dir.portRastreo() + "/";
};




module.exports = dir;