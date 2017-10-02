function findPairForSum(array, number){
    
    var sum = [];
    
    for(var i = 0; i < array.length; i++){
        for(var oi = 0; oi < array.length; oi++){
            if(array[i] + array[oi] === number){
                sum.push(array[i]);
            }
        }
    }
    
    return sum;
  
}

/*
Crea una función que encuentre un par de números dentro del array que, sumados, 
den como resultado un número determinado(array de números, número determinado){
    crea una variable vacía que sea un array = [];
    
    crea un loop que itere a través del array{         
        crea otro loop que itere a través del array{    --> estos dos bucles irán examinando el array
                                                            con dos bucles, se podrá mantener un número fijo y luego recorrer el array para compararlo con los otros números
    
            si el primer número dentro del array y el mismo suman el número,
            añadelos a al array vacío. luego irá comparando el segundo con el primero y así sucesivamente;
        }
}

*/
