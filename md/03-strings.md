# **CONOCIENDO MÁS STRINGS**

* ¿Qué pasa si tenemos texto entre comillas en el string?

Para que no sea tomado como finalización del string, usamos la barra invertida detrás de las comillas utilizadas: `"El dijo: \"Hola mundo\"`.

* > CONCATENACIÓN DE STRINGS:
~~~ javascript
"Hola" + "Mundo" = "HolaMundo" // Sin espacio
"Hola " + "Mundo" = "Hola Mundo" // Con espacio
~~~

* > CONCATENACIÓN DE STRINGS Y NÚMEROS:

~~~ javascript
1+2+3 = 6
1+2+"3" = '33'
"1"+2+3 = '123'

// Al concatenar strings y números, los concatena como si fueran dos strings.
~~~

* > TEMPLATE LITERALS
~~~ javascript
`El ganador del sorteo de una hamburguesa es ${ganador}`

// ganador es una variable
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
* "Reemplaza una parte de la cadena por la que especifiquemos" --> string.substring("Hola","Adiós"); // Cambiamos Hola por Adiós.
~~~