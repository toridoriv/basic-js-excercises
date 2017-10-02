function areValidCredentials(name, password) {

    if (name.length > 3 && password.length >= 8) {
        return true;
    } else {
        return false;
    }
    
}


/*

Crea una función que evalúe si el nombre y la contraseña cumplen con las condiciones dadas(ingresar nombre, ingresar pass) {
    si (el nombre mide menos de 3 caracteres y la contraseña posee 8 o más caracteres) {
        devuelveme el valor verdadero;
    } en cualquier otro caso {
        devuelveme el valor falso;
    }
}


*/
