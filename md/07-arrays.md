# **ARRAYS** = _Arreglos_

_Son una lista ordenada de datos encerrada entre corchetes ``[]`` y separados por ``(comas = ,)`` los datos pueden ser de cualquier tipo._


## **Ejemplo:** 
~~~ js
let arrays = [1, 'Hola', true, [true, false]];
              0    1      2          3         // posición
~~~

<hr>

## **Propiedades y métodos:**

~~~ js
array.unshift(x) // Agrega un elemento x al inicio del array.

array.shift() // Elimina el elemento del inicio del array y lo devuelve.

array.push(x) // Agrega un elemento x al final del array.

array.pop() // Elimina el elemento al final del array y lo devuelve.

array.indexOf(x) // Devuelve la posición o índice del elemento x.

array.reverse() // Invierte el orden del array.

array.incluides(x) // Devuelve true si el array contiene a el elemento x.

array.join("") // Devuelve todos los elementos en un string especificado el separador.

array.sort() // Ordena el array alfabeticamente.

array.splice(x,y,z) //  Desde la posición x, corta elementos y los reemplaza con z. En síntesis, te permite agregar o eliminar un elemento del medio, "z" & "y" son opcionales.

array.slice(x,y) // Hace lo mismo que splice, pero no modifica al array original, "y" es opcional.
~~~

<hr>

## **Propiedades y métodos más utilizados en funciones de arrays:**

~~~js
array.filter(x => condicion) // Devuelve una lista que cumplan cierta condición, si no coincide devuelve el array VACÍO

array.find(x => condicion) // Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada (encuentra uno).

array.forEach(x => ...) // NO DEVUELVE NADA, NI TAMPOCO MODIFICA AL ARRAY ORIGINAL, PERO TE PERMITE EJECUTAR UNA ACCIÓN CON CADA ITEM DEL ARRAY.

array.map(x=>acción) // TE PERMITE EJECUTAR UNA DETERMINADA ACCIÓN CON CADA ITEM DEL ARRAY Y GUARDARLO EN UN ARRAY NUEVO.
~~~