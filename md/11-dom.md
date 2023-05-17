# Document Object Model (DOM)
Básicamente es un objeto que va a representar todo lo que tengas en el HTML y se puede manipular con javascript (acceder, modificar, eliminar o añadir nuevos).


## El árbol del DOM
* los elementos HTML se convierten e nodos interrelacionados en el árbol.
* Los nodos pueden tener nodos hijos `(child)`.
* Los nodos del mismo nivel son hermanos `(sibling)`

<hr>

## El objeto 'document'
Se puede usar para acceder a todos los elementos del DOM. Por lo tanto si quieres acceder a objetos de una página HTML, usamos el document.

```` javascript
//Lo interpreta como texto
document.body.innerText = 'Ejemplo';

//Nos devuelve con etiqueta
document.body.innerHTML = 'Ejemplo';
````

<hr>

## Seleccionando elementos
* Todos los elementos HTML `son objetos`, entonces tienen `propiedades` y `métodos`.
* El objeto 'document' tiene métodos que te permiten seleccionar el elemento HTML deseado.
* Existen varios métodos para selección de elementos y son los siguientes:
```` js
document.getElementById('id');
document.querySelector('#id');

document.getElementsByClassName('.classname');
document.querySelector('.classname');

document.getElementsByTagName('tag');

//Los 3 métodos  más usados son:

//POR ID
document.getElementById('id');

//POR NOMBRE DE LA CLASE
document.getElementsByClassName('classname');

//POR ETIQUETA
document.getElementsByTagName('tag');
````

<hr>

## Agregrar nodos

* Para crear nuevos elementos podemos utilizar el método `createElement`.

* Una vez creados los podemos añadir al DOM con `appendChild`.

~~~ js

let myp = document.createElement('p');
myp.innerHTML = 'yet another';
"yet another"

myp.style
CSSStyleDeclaration length=0
myp.style.border = '2px dotted blue'
"2px dotted blue"

document.body.appendChild(myp)
<p style= "border: 2px dotted blue">
~~~

<hr>

## Clonar nodos

* Tambié podemos copiar elementos existentes con `cloneNode()`

* `cloneNode` acepta un `parámetro` booleano (`true` copiará el nodo con todos sus hijos y `false` solo el nodo).

~~~ js
let el = document.getElementsByTagName('p')[1];
<p><em>second</em>paragraph</p>
document.body.appendChild(el.cloneNode(false))
document.body.appendChild(document.createElement('p'))
document.body.appendChild(el.cloneNode(true))
~~~

<hr>

## Especificar dónde insertar un nodo:

* Con `insertBefore()` podemos especificar el elemento delante del cual queremos insertar el nuestro.

~~~js
document.body.insertBefore(
  document.createTextNode('boo!'),
  document.body.firstChild
)
~~~

<hr>

## Especificar dónde insertar un nodo

* Para eliminar nodos del DOM podemos utilizar `removeChild()`.

* También podemos usar `replaceChild()` para sustituirlo por otro que se le pasa como parámetro.

* Tanto replaceChild() como removeChild() devuelven el nodo eliminado.