# **VARIABLES**

Las variables son espacios donde se puede guardar información y asociarla a un determinado nombre. Cada vez que se consulte ese nombre posteriormente te devolverá la información que contiene. La primera vez que se realiza este paso se suele llamar `inicializar una variable`.

~~~ js
var name = 'Su declaración es global, puede cambiar su valor y se puede declarar varias veces';

let name2 = 'Declara una variable en ámbito local, no se puede declarar de nuevo, pero si puede cambiar su valor';

const name3 = 'Declara una variable de solo lectura en un bloque de ámbito. No es posible cambiar su valor';
~~~

* Var se considera de mala práctica, así que evitamos usarla.

* Let se pueden declarar sin iniciar, tampoco podemos declarar de nuevo. Ejemplo:
~~~ js
// Podrás agregarle un valor de cualquier tipo en cualquier momento.
let name;
let name2;


// Esto va a marcar como error por lo tanto se cambia el nombre de la segunda variable para evitar el error.
let name = 'Juan';  
let name = 'José';  // Error

let name = 'Juan';
let name2 = 'José';  //Correcto

~~~

* Const no se puede reasignar (cambiar su valor), menos iniciar otra con el mismo nombre y no se puede declarar sin iniciar `IMPORTANTE`: Solo la usamos cuando el valor de la variable no va a cambiar en ningún momento. Ejemplo:
~~~ js
// Esto hará que se produzca un error.
const name; 


const name = 'Juan';  
const name = 'José';  // Error

const name = 'Juan';
const name2 = 'José';  //Correcto
~~~