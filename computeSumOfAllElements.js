function computeSumOfAllElements(arr) {

    var result = 0;
    
    for (var i = 0; i < arr.length; i++){
        result += arr[i]; 
    }
    
    return result;
    
}


/*

crea una función que sume todos los números dentro de un array(inserta array) {
    
    crea una variable cuyo valor sea cero llamada result;
    
    crea un bucle que pase por el array(crea una variable que simbolice la posición dentro del mismo; que analice el array mientras la posición sea menor a la extensión del array; y avanza de uno en uno) {
        sumale a la variable result todos los números que vaya encontrando dentro del array;
    }
    
    devuelveme el valor de result;
}

*/