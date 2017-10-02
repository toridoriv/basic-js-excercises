function filterOddElements(nums) {
    
    var oddArray = [];

	for(var i = 0; i < nums.length; i++) {
	    if(nums[i] % 2 !== 0) {
	        oddArray.push(nums[i]);
	    }
	}
	
	return oddArray;
}


/* 

Crea una función que filtre los elementos impares de un array y luego devuelva un nuevo array sólo con esos números(nums) {

    crea una variable cuyo tipo sea array y esté vacía;
        for(crea una variable cuyo valor sea la posición dentro del array y parte analizando el array desde cero; analizalo mientras ese valor sea menor a la extensión del array; avance de uno en uno) {
            si(en la posición i dentro de nums un valor, al ser dividido por dos no da como residuo 0) {
                agrega el valor de esa posición a un nuevo array llamado oddArray;
            }
        }
        
    devuélveme cómo quedó oddArray;
}

*/
