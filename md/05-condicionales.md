# **CONDICIONALES**

> ## IF - ELSE
* El condicional `if - else` nos posibilita definir las acciones que se deben llevar a cabo si se cumple cierta condición y también ejecutar las acciones que en caso de que no se cumpla emita otra acción o mensaje por medio de la consola.

~~~ js
if(condicion true){
  console.log('Haz esto...')
}else{
  console.log('Haz este otro...')
};

si(condicion verdadera){
  console.log('Haz esto...')
}sino{
  console.log('Haz este otro...')
}

// Ejemplo real de un if-else

let edad = parseInt(prompt("Ingrese su edad"));

if ((edad >= 16 && edad < 18) || edad >= 71) {
  document.write("Es optativo que votes");
} else if (edad >= 18 && edad <= 70) {
  document.write("Es obligatorio votar");
} else {
  document.write("No podes votar");
}
~~~

> ## SWITCH

Es una estructura de control condicional que permite definir múltiples cosas (`condiciones`) que son verdaderas y la condición falsa es equivalente al else que sería `default:`

>\# Muchas condiciones y poco código: `switch`.

>\# Pocas condiciones y pedazos de códigos considerables: `if - else`.
~~~ js
switch(expresión){
  case 1:
    console.log('Bloque de código a ejecutar')
    break;
  case 2:
    console.log('Bloque de código a ejecutar')
    break;
  case 3:
    console.log('Bloque de código a ejecutar')
    break;
  default:
    console.log('Bloque de código a ejecutar si no hay coincidencias con ningún case')
}

// Ejemplo real de un switch
const estacion = prompt(
  "Seleccione su estación preferida: 1-verano, 2-primavera, 3-otoño, 4-invierno"
);
console.log(estacion.toLowerCase());
switch (estacion) {
  case "1":
    document.write(`<p class="subtitulo">Verano</p>
    <ul>
      <li>Plato principal: Milanesa con ensalada</li>
      <li>Bebida:Coca-Cola</li>
      <li>Postre: Helado</li>
    <ul/>
    `);
    break;
  case "2":
    document.write(`<p class="subtitulo">Primavera</p>
    <ul>
      <li>Plato principal: Empanadas</li>
      <li>Bebida: Jugo de naranja</li>
      <li>Postre: Ensalada de frutas</li>
    <ul/>
    `);
    break;
  case "3":
    document.write(`<p class="subtitulo">Otoño</p>
    <ul>
      <li>Plato principal: Lasaña</li>
      <li>Bebida: Copa de vino</li>
      <li>Postre: Volcán de chocolate</li>
    <ul/>
    `);
    break;
  case "4":
    document.write(`<p class="subtitulo">Invierno</p>
    <ul>
      <li>Plato principal: Guiso</li>
      <li>Bebida: Fanta</li>
      <li>Postre: Pastafrola</li>
    <ul/>
    `);
    break;
  default:
    document.write("Leer bien y colocar el número correspondiente a su elección");
}

~~~