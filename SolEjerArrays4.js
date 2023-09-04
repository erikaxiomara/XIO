let notas = [5, 4, 3,4,3 ,];
let totalAprobados = 0;
let totalDesaprobados = 0;
let sumatoriaNaprobados = 0;
let sumatoriaNperdieron = 0;
let promedioAprobados = 0;
let promedioDesaprobados =0;


notas.forEach((nota)=>{ // este for each le pregunta a las notas cuando las recorre si son menor a 3 y las chulea
 
  if (notas<3) {
    totalDesaprobados=totalDesaprobados+1;
    sumatoriaNperdieron=sumatoriaNperdieron+nota//aqui no se pone chulito solo anota las notas con las que perdieron y ganaron
  } else { 
    totalAprobados=totalAprobados+1; //preg nota tu eres menor a 3 la nota responde no, entonces le da un chulito hacia los aprobados 
    sumatoriaNaprobados=sumatoriaNaprobados+nota
   
  } 
    
})

promedioAprobados = totalAprobados !== 0 ?  sumatoriaNaprobados/totalAprobados : 0
promedioDesaprobados = totalDesaprobados !== 0 ?  sumatoriaNperdieron/totalDesaprobados : 0

console.log("El promedio de notas aprobadas es: ", promedioAprobados);
console.log("El promedio de los desaprobados es: ", promedioDesaprobados);
console.log("El total de aprobados es: ", totalAprobados);
console.log("El total de desaprobados es: ", totalDesaprobados);
