function addFullNameProperty(obj) {
    
    obj.fullName = obj.firstName + " " + obj.lastName;
    return obj.fullName;
  
}

/*

Crea una función que, dado un objeto en dónde se indiquen el primer nombre y el apellido de una persona, agregue al objeto ambos valores sumados, es decir, el nombre completo (insertar nombre de objeto) {
    
    crea una nueva key dentro del objeto que se llame fullName y cuyo valor sea el primer nombre, más espacio, más el apellido;
    devuélveme el valor de esa nueva propiedad;
}

*/