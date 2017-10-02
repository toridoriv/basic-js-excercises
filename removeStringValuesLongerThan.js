function removeStringValuesLongerThan(num, obj) {

    for (var key in obj) {
        if (obj[key].length > num) {
            delete obj[key];
        }
        
    }
        return obj;

}

/* 

crea una función que remueva los string más largos que el número dado dentro de un objeto (número, objeto) {

   crea un loop (que busque la variable key en el objeto) {
       si (si dentro de la key del objeto hay un valor que sea más largo que el número dado) {
           borra la propiedad dentro del objeto;
       }
   }
   
   devuelveme cómo quedó el objeto;
    
}

*/