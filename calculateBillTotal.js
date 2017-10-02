function calculateBillTotal(preTaxAndTipAmount) {
  var tax = preTaxAndTipAmount * 0.095;
  var tip = preTaxAndTipAmount * 0.15;
  var total = preTaxAndTipAmount + tax + tip;
  
  return total;
}

/* 

Crea una función que calcule el total de una cuenta, incluyendo iva y propina(valor-neto) {
    crea una variable llamada tax que equivalga al valor-neto multiplicado por el porcentaje del iva expresado en decimales;
    crea una variable llamada tip que equivalga al valor-neto multiplicado por el porcentaje de la propina expresado en decimales;
    crea una variable que equivalga al valor-neto sumado a tax y a tip;
    
    duvuelveme el valor de total;
}

*/