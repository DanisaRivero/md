# **Tipos de datos**

Existen muchos tipos de datos en javascript, aquí dejo los más usados en este lenguaje de programación.

`String`: Valor de texto (cadenas de texto, carácteres, etc.). Se encierran en comillas `'Simples'` o `"DOBLES"`.

~~~js
let string = 'Estoy usando comillas simples';

const stringRandom = "Estoy usando comillas dobles";
~~~

`Number`: Valor numérico (Enteros, decimales, negativos, etc.). Ejemplos: 422, -25,

~~~js
let number = 25;

const number2 = -99;

let number3 = 2.23;
~~~

`Boolean`: Valor booleano. Ejemplos: true o false.

~~~js
let quieroCebolla = false;
let tengoHambre = true;
~~~

`Undefined`: Valor sin definir o variable sin definir.

~~~js
let definir;
// Esto es undefined
~~~

`Arrays (arreglos)`: Son contenedores para coleccionar datos. Ejemplo:

~~~js
// Queremos almacenar nombres de varios alumnos en una sola variable, usamos array.

const nombreAlumnos = ["Carla", "Facundo", "Maxi", "Ivana"];

const cosasSurtidas = ["Computadora", "123", "false", { edad: 21 }];
~~~

`Objects (objetos)`: Es una entidad con propiedades y tipos. Ejemplo: una taza es un objeto con propiedades. Tiene un color, diseño(forma), valor, material, etc. Van entre llaves `"{}"` y separados por coma `","`.

También puede ir un objeto dentro de un objeto.

~~~js
const taza = {
  color: 'azul',
  forma: 'gatito',
  valor: 300,
  detalles: {
    material: 'porcelana',
    sePuedeRomper: true
  }
};
~~~

`Null`: Vacio.