# **ESTRUCTURAS ITERATIVAS**

*__Una vez que la lectura del código entre, no saldrá hasta que se deje de cumplir la condición. Se resume en un -`mientras pase X condición, hace esto`- esto quiere decir que nuestra condición en algún momento tendrá que cambiar, sino estaríamos en un bucle infinito.__*

> ## While = Mientras

*Realizará una acción mientras mientras no se cumpla la condición especificada*.

\# Este ciclo se utiliza cuando `no sabemos` el número de veces exacto que se ejecutará el ciclo.

**SINTÁXIS**
~~~ js
while(condition){
  //código a ejecutar hasta que la condición sea falsa
}
"Esta condición nos limita u ocupa nuestra ram porque se crea un bucle infinito. Cuando el while recibe un false deja de ejecutarse el código."
~~~

> ## Do - While

A diferencia del while, el código llega a ejecutarse una vez a pesar de que la condición no sea verdader, no sirve de mucho, pero verifica si es `true` o `false`

**SINTÁXIS**
~~~ js
do {
  // Código a ejecutar hasta que la condición sea falsa
}
while(condicion)
~~~

> ## FOR

Muy similar al while, pero consiste en tres expresiones opcionales, encerradas en paréntesis `()` y separadas en punto y coma `;`. Ejecuta un código una determinada cantidad de veces.

**SINTÁXIS**
~~~ js
for(iniciador, condicion, cambio en el contador){
  // Código a ejecutarse una cantidad de veces
}

// Ejemplo
let number = prompt('Ingrese un número')
for(let i = 0; i < number; i++){
  console.log(i)
}
~~~