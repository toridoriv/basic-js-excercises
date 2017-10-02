function fromListToObject(array) {
    var object = {};
    
    for(var i = 0; i < array.length; i++){
        object[array[i][0]] = array[i][1];
    }
    
    return object;
}

module.exports = fromListToObject;

/*
Crea una función que convierta un array de arrays en un objeto.
Cada par debería convertirse en key y propiedad respectivamente (){
    
    crea un objeto vacío = {};
    crea un loop que recorra el array {
        el primer valor del primer array será key = el segundo, propiedad;
    }
    
muestramame el objeto final;

}

*/
