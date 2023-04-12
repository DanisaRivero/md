//!  TIPOS DE DATOS
//? STRING
let string = "texto123._* |";
document.write(string);

//? NUMBER
let number = 3;
document.write(number);

//? ARRAY
let array = ["dani", 14, []];
document.write(array);

//? BOOLEAN
let bolean = true;
let bolean2 = false;
document.write(bolean, bolean2);

//? OBJECT
let objectCar = {
  color: "blue",
  model: 2007,
  local: false,
  brand: {
    name: "Renault",
  },
};
console.log(objectCar);

//? NULL
let vacio = null;
console.log(vacio);

//? UNDEFINED
let indefinido;
console.log(indefinido);


//! TIPOS DE OPERADORES
//? OPERADOR DE ASIGNACIÓN
let nombre = 'Danisa';
    // signo igual


//? OPERADORES ARITMETICOS 
console.log(15+15); //30 suma
console.log(15-15); //0 resta
console.log(15*15); //225 multiplicación
console.log(15/15); //1 división
console.log(15%15); //0 sobrante de una división o módulo (mod)


//?OPERADORES UNITARIOS (++, --, !)
let numero = 5;
numero++;
console.log(numero); //6
numero--;
console.log(numero); //5
console.log(!numero); //false 


//?OPERADORES RELACIONALES (el valor es tipo booleano)
console.log(15 > 20, '15 es mayor que 20?');
console.log(15 > 10, '15 es mayor que 10?');

console.log(15 < 20, '15 es menor que 20?');
console.log(15 < 10, '15 es menor que 10?');
console.log(15 < 15, "15 es menor que 15?");

console.log(15==15, '15 es igual a 15?'); //true
console.log(15===15, '15 es igual a 15?'); //true
console.log(15=="15"); //Compara contenido --> true
console.log(15==="15"); //Compara contenido y tipo de dato --> false

console.log(15!=15, '15 es distinto que 15'); //false
console.log(15!=='15', '15 es estrictamente distinto que 15'); //true

//?OPERADOR CONDICIONAL (ternarios) 
20==='20'? console.log('condicion verdadera') : console.log('condicion falsa');



//?OPERADORES LÓGICOS
//* AND

console.log(20>10 && 25>10); // --> true
            //true    true
console.log(20>10 && 25<10); //false
            //true    false
console.log(20>10 && 25<10 && 30>10 && 20==20 && 10<12); //--> false
            //true   false    true     true      true

/* 
*OR (se conforma con un solo verdadero para tener el valor "true",
*si todas son falsas el valor es "false")
*/
console.log(20>10 || 25>10); // --> true
console.log(20>10 || 25<20); //--> true
console.log(20>10 || 25<20 || 20<12 || 25<1 || 1<2); //--> true
          //true   false    false    false   false
console.log(20>22 || 25<20 || 20<12 || 25<1 || 1<2); //--> false
          //false  false    false    false   false
