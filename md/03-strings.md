# **CONOCIENDO MÁS STRINGS**

* ¿Qué pasa si tenemos texto entre comillas en el string?

Para que no sea tomado como finalización del string, usamos la barra invertida detrás de las comillas utilizadas: `"El dijo: \"Hola mundo\"`.

* > CONCATENACIÓN DE STRINGS:
~~~ javascript
"Hola" + "Mundo" = "HolaMundo" // Sin espacio
"Hola " + "Mundo" = "HolaMundo" // Con espacio
~~~

* > TEMPLATE LITERALS
~~~ javascript
`El ganador del sorteo de una hamburguesa es ${ganador}`
~~~

## **Métodos y propiedades para strings**
<hr>

~~~ js
* "Pasar la cadena a mayúscula" --> string.toUpperCase();
* "Pasar la cadena a minúscula" --> string.toLowerCase();
* "Ver la cantidad de caracteres" --> string.length;
* "Obtener un caracter según su posición" --> string.charAt(x);
* "Obtener una parte de la cadena" --> string.substring(0,3);
* "Eliminar los espacios iniciales y finales" --> string.trim();
* "Verificar si la cadena incluye algo" --> string.includes(x);
* "Reemplaza una parte de la cadena por la que especifiquemos (anidamos el subtring)" --> string.substring(0,3).replace('Palo', 'Dado'); // Se cambió palo por dado.
~~~