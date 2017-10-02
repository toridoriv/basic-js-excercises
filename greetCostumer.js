var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
    
    var greeting = "";
  
	if(customerData[firstName] === undefined) {
	    greeting = "Welcome! Is this your first time?";
	    
	} else if(customerData[firstName].visits === 1) {
	    greeting = "Welcome back, " + firstName +"! We're glad you liked us the first time!";
	    
	} else if(customerData[firstName].visits > 1) {
	    greeting = "Welcome back, " + firstName + "! So glad to see you again!";
	}
	
	return greeting;
}

/* 
Crea una función que saludo a los clientes acorde a las veces que han visitado el lugar(primer-nombre-del-cliente) {
    crea una variable vacía llamada greeting en donde serán ingresados los datos;
    
    si (el nombre del cliente no está definido en la base de datos {
        agregale a greeting el string "Welcome! Is this your[...]";
    
    por el contrario, si (el nombre del cliente está definido y figura que ha visitado el local una vez) {
        agregale a greeting el string "Welcome back, " [acá-iría-su-nombre-de-pila], "we're glad [...]";
    
    por el contrario, si (el nombre del cliente está definido y ha visitado el local más de una vez) {
        agregale a greeting el string [...];
    }
    }
    
    Devuélveme el valor de greeting.
}
*/

