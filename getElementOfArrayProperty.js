function getElementOfArrayProperty(obj, key, index) {

    if (typeof obj[key] === "string" || obj[key] === undefined) {
        return undefined;
    } else {
    var pos = obj[key][index];
    return pos; 
}
}

/* crea una función que obtenga un elementro dentro de un array, dentro de un objeto.

si (la propiedad dentro del objeto es un string y no un array y si mi key no está dentro del objeto) {
	devuelveme el resultado undefined;
} en cualquier otro caso {
crea la variable llamada pos cuyo valor sea el que esté ubicado en el index ingresado dentro de la key señalada;
	devuelveme esa nueva variable; 
	
	*/