console.log("Sesion JS02 Funciones");

/* ############### Funcion declarada ############### */
// Llamado de la funcion declarada
console.log(`Multiplica 5 * 6 = ${multiplicar(5,6)}`);

/* Este es un ejemplo de una funcion declarada
 * Una caracteristica de las funciones declaradas es que tienen un hoisting (elevacion) */
/**
 * Funcion que multiplica dos valores
 * @param {Number} a valor 1 a multiplicar
 * @param {Number} b valor 2 a multiplicar
 * @returns resultado de la multiplicacion valor1 x valor2
 */
function multiplicar(a,b) {
  return a*b;
}

/* ############### Funcion expresada ############### */

/* Las funciones expresadas (function expressions) son declaradas dentro
 * de la asignacion de la asignacion de una variable.
 * Estas funciones pueden ser anonimas (no tienen nombre).
 * Las funciones expresadas no tienen hoisting
 */
/**
 * Funcion que suma dos valores
 * @param {Number} a valor1 a sumar
 * @param {Number} b valor2 a sumar
 * @returns resultado de la suma valor1 + valor2
 */
// Su ventaja es que son cortas
const suma = function(a,b){ return a+b; }

/* !!!!!!!!!! ATENCION: Las funciones expresadas se definen antes de llamarse !!!!!!!!!! */
// Llamado de la funcion expresada
console.log( `La suma de 56 + 4 = ${suma(56,4)}`);

/* ############### Funcion autoinvocada ############### */
/* Las funciones autoinvocadas (self-invoking functions) pueden ser anonimas y
 * se autoinvocan es su declaracion
 */

(function (){
  console.log("---------------");
  console.log("Holis, amiguis");
  console.log("---------------");
})();

/* ############### Funcion flecha ############### */
/* Las funciones flechas funcionan similar a las funciones declaradas.
 * No requieren la palabra function.
 * Si tienen una sola instruccion y es el retorno, no requiere la instruccion return
 */

/**
 * Funcion que resta dos valores
 * @param {Number} a valor1 a restar
 * @param {Number} b valor2 a restar
 * @returns resultado de la resta a-b
 */
const resta = (a,b) => a-b;
// Llamado de la funcion flecha
console.log( `La resta de 56 - 4 = ${resta(56,4)}`);

/* ############### Funcion con parametros inicializados (default) ############### */
function division(a=1,b=1){
  return a/b;
}
// Llamado de la funcion con parametros
console.log( `La division de a / b = ${division(2)}`);

/* ############### Funcion recursiva ############### */
/* Funciones que se llaman a si mismas */

function factorial(num){
  if(num<=0){ 
    return 1;
  }
  return (num* factorial(num-1));
}
// Llamado de la funcion con parametros
console.log( `Factorial de 5 = ${factorial(5)}`);