function getAllKeys(obj) {

var objKeys = [];

    for(var prop in obj){
        objKeys.push(prop);
    }
return objKeys;

}

/*

Crea una función que convierta todas las propiedades de un objeto en un array(objeto) {
	crea una variable llamada objKeys = [array vacía];

	crea un loop que recorra todas las propiedades de un objeto(){
		inserta todas esas propiedades en objKeys, el array vacío;	
	}
muestrame cómo quedo el array objKeys;
}


*/