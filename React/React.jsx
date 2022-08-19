/* 
INTRODUCCION REACT

React es una librería de JavaScript, creada por facebook, para crear proyectos del lado del front-end. 
Su implementación permite que la carga de la aplicación sea más rápida y performante. 
¿Cómo lo logra? React usa componentes, que no son otra cosa más que bloques de código reutilizables, 
los cuales debemos crear una sola vez y luego usarlos cuándo y dónde sea necesario. 

React es eficiente porque cuando se realiza algún cambio dentro de la vista, el DOM se compara 
con un Virtual DOM, y las diferencias de los elementos entre estos es lo unico que se modifica del DOM,
sin tener que estar volviendo a llamar al mismo completamente, agilizando la carga
el proceso de comparar el virtual dom y el dom real se llama DIFFING.
el proceso en el que se realizan los cambios se llama RECONCILIATION.

React en el patrón de diseño MVC, representa la V por enfocarse exclusivamente al front.

como se instala? npm init react-app "nombre del proyecto"
cd "nombre del proyecto"
y luego npm start

en /public se encuentra el index.html donde se ejecuta toda la aplicación de react
en /src se encuentran la aplicacion entera de react.

Se llama ecosistema de react a todo el conjunto de herramientas que permiten 
a react trabajar como un framework. como Webpack y Babel.
Webpack permite escribir codigo modular y empaquetarlo para optimizar el tiempo de carga. 
Babel es un compilador. Permite escribir javascript moderno.

*/

//COMPONENTES
/* Los componentes son piezas funcionales y fundamentales de la aplicación, ya que nos van a permitir 
separar las distintas partes que conforman la estructura de un sitio web en pequeñas piezas independientes y 
reutilizables. Estas están pensadas para que trabajen de forma aislada, pero que hagan parte de un "todo". */

// componentes Stateless
// Se denominan así porque internamente cumplen en un return una logica sencilla que entrega un html

function navbar() {
    return (
        <nav>
            <a href="/home">Home</a>
            <a href="/productos">Productos</a>
        </nav>
    );
}

//Para crear un componente, lo primero que tenemos que hacer es importar React
import React, {Component} from "react"; //en index.js
export default Navbar // en Navbar.js

//para implementar un componente, debemos crear un archivo con extensión .js con el nombre de la función 
// que va a llevar adentro.
/* 
import navbar from "./components/navbar.js"

function App() {
    return {
        <div className="App">
        <navbar/>
        </div>
    };
}; 
*/

// JSX
// jsx es una extensión de javascript para generar bloques de código HTML pero con sentencias de javascript. 
/*  declaramos una variable llamada name y luego la usamos en jsx encerrandola dentro de llaves. se puede
 colocar cualquier expresión dentro de jsx */
function Name() {
    const name = "jhon doe"
    return ( <h1 className="title">{name}</h1>
    );
};


//PROPS DE UN COMPONENTE
/* Las props son entradas de un componente de React. Representan infromación que es pasada desde un compomenente
padre a un componente hijo. Pueden recibir propiedades como parámetros para poder insertar valores
y eventos en el HTML. */
//Las propiedades de un componente reciben sus respectivos valores, cuando el componente es llamado por la app
//la información se envía una sola vez a traves de props y se define cuando se crea el componente.

function Bienvenido(props) {
    return (
        <div>
            <h1>
                Hola, {props.nombre}
            </h1>
        </div>
    )
};

/* Esta función es un componente de React Válido porque acepta solo un argumento del objeto "props" 
(que proviene de propiedades) con datos y devuelve un elemento de React. */

//KEY PROPS y .MAP()
const usuarios = ["Diego","Mariel","Daniel"];
<MiLista
    items = { usuarios }
/> 
// en este ejemplo podemos ver como pasamos al componente "mi lista" el array usuarios siendo asignados en la variable "items"
/* Dentro del componente, lo primero que tenemos que hacer es recibir las props como parámetro de la función. Luego, dentro de la 
estructura jsx, iteramos sobre el array recibido para imprimir a los usuarios. */

function MiLista(props) {
    return (
        <div>
            <ol>
                {props.items.map(item => <li>{item}</li>)}
            </ol>
        </div>
    )
};

//dentro de un componente de React no se puede iterar por lo que hay que buscar otros métodos para iterar un array, en este caso .map()

//KEY PROPS
/* Las Keys ayudan a React a identificar que elementos se han modificado, eliminado o agregado. Es la manera que se identifican nuestros
componentes en el proyecto. a la hora de usar las keys hay que tener en cuenta:
 - solo es necesario agregar keys cuando devolvemos un array de elementos iguales
 - la key debe ser unica entre elementos hermanos
 - las keys no se muestran en el HTML final
*/

function MiLista(props) {
    return (
        <div>
            <ol>
                {props.items.map((item, i) => <li key={i+item}>{item}</li>)}
            </ol>
        </div>
    )
};
//los componentes que renderizan varios elementos del mismo tipo necesitan una key con valor unico.
// las keys deben ser dadas a los elementos dentro del mapeo del array para que los elementos tengan una identidad unica y estable


//PROPTYPES Y DEFAULT PROPS
//PropTypes
/* propTypes es una propiedad especial que tiene React para verificar el tipo de dato de las props de un componente */
// como se instala? via npm --> npm install --save prop-types
// una vez instalado, se lo importa en el componente donde se lo quiera usar: 
import PropTypes from 'prop-types'; // ES6
const PropTypes = require('prop-types'); //ES5

/* PropTypes exporta un rango de validadores que se pueden usar para asegurar que la información recibida sea válida */
import PropTypes from 'prop-types';

function Saludar(props) {
    render() ;{
        return (
            <h1>Hola, {props.nombre}</h1>
        );
    }
}
Saludar.PropTypes = {
    nombre: PropTypes.string
};
/* export default Saludar; */

//Default Props
/* Es una propiedad del propio componente donde se establecen las props predeterminadas que recibira el componente. Esto se utiliza para props
no definidas, no para props nulos. 
 En el componente se debe definir una propiedad que se llame "defaultProps", a la que se le asignara un objeto literal como valor. Dentro de
 este objeto, se hara referencia al nombre de la propiedad y se le asignara un valor por defecto que queremos que la prop tenga.
*/
function SeteoColor(props) {
    // ...
}
SeteoColor.defaultProps = {
    color: 'blue'
}
// si no se indica el valor de props.color, sera por defecto 'blue'

// CHILDREN 
/** Los componentes children son todos aquellos elementos que son pasados entre las etiquetas de un componente padre */
/**
Configuración:
 Dentro del objeto literal props, existe la posiblidad children. Haciendo uso de esta propiedad, podemos traer a todos los hijos
 que definamos dentro del componente padre
*/
function Saludo(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.mensaje}</p>
            {props.children}
        </div>
    );
}
//le indicamos al componente donde debería imprimir los componentes hijos, en caso de que reciba alguno.
// cuando utilizamos al componente que creamos, tendremos que usar etiquetas de apertura y de cierre para definir el contenido que haga falta.
<main>
    <Saludo>
        //Definimos el contenido.
    </Saludo>
</main>

/** Cuando usamos un children?? 
 Cuando sabemos exactamente que contenido puede llegar a haber dentro de un contenedor padre.  
 De esta manera, configuramos un componente flexible y reutilizable.
*/ 

//STYLLING
// Primer paso: importar el archivo CSS al componente.
import 'componenteEstilos.css';
// Segundo paso: Asignarle una clase al componente. (al igual que en HTML y CSS)
<h2 className="productName"></h2>
// Tercer paso: No repetir las clases.
/* Si bien el proyecto esta modularizado y parece que en un principio no habría problema en repetir el nombre de las clases,
es vital no hacerlo para que no existan problemas a la hora de renderizar la totalidad del sitio, ya que se empezarían a pisar las 
clases entre si */



  