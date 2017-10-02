function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
      return("PUNTUACION INVALIDA");
  } else if (score <= 100 && score >= 90) {
      return("A");
  } else if (score <= 89 && score >= 80) {
      return("B");
  } else if (score <= 79 && score >= 70) {
      return("C");
  } else if (score <= 69 && score >= 60) {
      return("D");
  } else {
      return("F");
  }
}

/* 

Crea un código que convierta el puntaje a una calificación expresada en letra(puntaje) {
    si (el puntaje tiene un valor sobre 100 || bajo cero) {
        devuelveme el string "PUNTUACIÓN INVÁLIDA";
    
    } pero si (el puntaje es 100 o menos && 90 o más) {
        devuelveme el string "A";
    } Y ASÍ SUCESIVAMENTE XD ...
        
    }
}

*/