# **OBJETO MATH**

> El objeto math no se puede editar. Todas las propiedades y métodos son estáticos.

+ Propiedades
  -
~~~ javascript
// Constante    Descripción        Valor
Math.E       "Número de Euler"    2.718
Math.LN2     "Math.log(2)"        0.693
Math.LN10    "Math.log(10)"       2.303
Math.LOG2E   "Math.log2(Math.E)"  1.443
Math.LOG10E  "Math.log10(Math.E)" 0.434
Math.PI      "Número Pi o π"      3.14159
Math.SQRT1_2 "Math.sqrt(1/2)"     0.707
Math.SQRT2   "Math.sqrt(2)"       1.414
~~~

+ Métodos
  -
~~~ javascript
Math.round()  --> "Redondea un número"        // 36  } 35,75
Math.floor()  --> "Trunca (corta un número)"  // 35  } 35,75
Math.max()    --> "Encuentra números altos"
Math.min()    --> "Encuentra el número más bajo"
Math.pow()    --> "Potencias"
Math.sqrt()   --> "Raíz cuadrada"
Math.cbrt()   --> "Raíz cúbica"
Math.random() --> "Obtiene un número random entre 0 y 1. Al agregar una multiplicación *10 o *20 esto hará que pase de 0 a 1 a 0 a 10 o 0 a 20"
~~~

## PARSEAR CADENAS
<hr>

~~~ js
Number('15') // Lo devuelve como número
parseInt('23.33') // Convierte un número decimal a entero 23.33 = 23
parseFloat() // Convierte el string en número ya sea entero o decimal
~~~

## LIMITAR LA CANTIDAD DE DECIMALES
~~~ js
0.39852140.toFixed(2) //Lo reduce a "0.39" y lo devuelve como string
~~~