// TIP: para ordernar el texto sin tener que scrollear para la derecha, use "Alt + z"

// INTRODUCCION REACT
/* 
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


//COMPONENTES STATEFULL
/* Son aquellos componentes que tiene un estado, o información interna que puede ser modificada por los mismos componenetes (se cambia el contenido interno debido a eventos externos). Es muy dinámico porque se deja de trabajar con props para usar información funcional. */
// Hay que pensar que componentes van a ser "de estado" o no, dependiendo del "contexto" en el que se lo utilice.
// No se van a trabajar como funciones nativas de JS, sino mas bien como una CLASE.

import React, { Component } from 'react'
//se importa react aclarando que queremos traer el objeto "Component"
export default class NombreComponente extends Component {
  render() {
    return (
        <></>
      //Código a renderizar ... 
    )
  }
};
// Usamos class para definir al componente y "extends Component" para hacer referencia al objeto que importamos. Por ultimo se utiliza render() para renderizar el mismo.

//se suele utilizar los componentes statefull cuando queremos INTERACTUAR CON EL USUARIO, y queremos que el componente cambie. Como los statefull son reactivos, el DOM se actualiza cuando se necesite.

//STATE y SET STATE
//al estado de un componente se le llama "State". Es un objeto literal (clave/valor) que almacenará la información que deseemos.
// setState() es un método que nos permite programar una actualización al objeto State de un componente. Cuando esté cambia, el componente responde volviendo a renderizar 

// el método "Constructor" es necesario para definir la estructura de un componente.
class State extends Component {
  constructor(props){
    super(props);
    //la función super() en el constructor es necesaria en react ya que se usar las props que se hereda del componente padre.
    this.state({valor:props.value})
    // dentro del constructor es donde unicamente podemos declarar "this.state"
    //podemos recibir props en el instructor. es BUENA PRACTICA utilizarlas al llamar al super().
  }
  incrementar(){
    this.setState({
        valor: this.state.valor + 1 
    });
    // en los métodos que no sean constructor, debemos utilizar this.setState()
  }
  render(){
    return(
        <button onClick={this.incrementar}></button>
        //con el evento onClick podemos modificar a través del metodo "incrementar" el estado del componente.
    )
  }
}

//EVENTOS
/* Los eventos dentro de un componente de React son manejados a través de métodos que van a guardar la lógica que realizará una operación cuando el usuario interactúe con el componente */
 // los métodos
 /* Para definir un método usamos la misma sintaxis que al momento de escribir una función, pero sin la palabra "function" */
 
 //los eventos
 /* Son los mismos que en javaScript, solamente que hay que tener en cuenta:
    + se escriben en la etiqueta, como si fueran un atributo
    + se nombran usando "on" + nombre del evento, usando camelCase.
    + se usan las llaves {} y la palabra reservada this para asociarlo con el método que queramos. */
 class Evento extends Component {
    saludar() {
        alert('Hiciste click!')
    }
    // creamos un metodo que mande una alerta cuando se haga click
   render() {
     return (
       <div>
        <h1 onClick={this.saludar}></h1>
        //como si fuese HTML, asignamos el evento e indicamos que método debe ejecutar.
       </div>
     )
   }
 }
//


//CICLO DE VIDA DE UN COMPONENTE

 //ComponentDidMount()
 function componentDidMount(){ 
    console.log("El componente fue renderizado")
 };
 // function no va pero por el archivo lo colóco para que no haya problemas
 /*
 Solemos utilizar este método para identificar el momento del ciclo de vida del componente donde se ha renderizado por primera vez. Este método solo se ejecuta despúes de la primera renderización, del lado del usuario, por ende lo veríamos a traves de la consola del navegador. (un uso es para hacer algún pedido a una API)
 */

 //componentDidUpdate()
 function componentDidUpdate(){
    console.log('el componente fue actualizado');
 };
 /*
 Método que utilizamos para identificar cuando un componente fue actualizado. Es decir, cuando sufrio ciertos cambios que hayamos programado en nuestro proyecto.
 */

 //componentWillUnmount()
 function componentWillUnmont() {
    console.log('el componente fue desmontado');
 };
 /*
 Método que utilizamos para identificar cuando un componente va a dejar de existir (no va a volver a ser renderizado). Dentro del método se suele hacer una limpieza de cualquier otro método que haya estado utilizando el componente que se va a desmontar.
 */
//


//INTEGRACIÓN CON APIS
/* Con React podemos utilizar cualquier biblioteca AJAX. (ej: AXIOS, jQuery AJAX, window.fetch que es soportada de manera nativa en los navegadores modernos).
*/
// Utilizando componentDidMount(), despúes de la primera renderización, es donde se solicita la información de la API

class Gifs extends Component {
  //configuramos el estado del componente para que pueda almacenar la información de la API luego de hacer el fetch.
  constructor(props) {
    super(props);
    this.state = {
        gif: ""
    }
  }
  //ejecutamos el fetch() hacia el endpoint donde está la información. Una vez procesada la data con .json, está lista para ser utilizada. En el segundo .then() asignamos información al estado del componente que habiamos declarado previamente.
  componentDidMount() {
    fetch('url de la api donde se solicita la información')
     .then(response => {response.json})
     .then(data => {this.setState({gif: data.image_url})})
     .catch(e => {console.log(e)})
  }
  render() {
    let contenido
    // creamos la variable contenido, para decidir que mostrar en base si la info de la API esta disponible.
    if(this.state.gif == ""){
        contenido = <h3>Cargando...</h3>
    } else {
        contenido = <img src={this.state.gif} alt="" srcset="" />
    }
    // preguntamos si la info del gif esta disponible, y dependiendo del resultado, mostramos si ya esta disponible o se esta cargando.
    <div>
        {contenido}
        <button>Hace click para ver un gif...</button>
    </div>
    //por ultimo programamos para que se muestre la variable donde se almacena el contenido disponible de la API
  }
}
//

//SPA (Simple Page Aplication)
 /*
 SPA o también llamada Single Page Application es una aplicación web en la cual solo existe un único punto de entrada, generalmente un archivo index.html.

 En una SPA no hay ningún otro archivo HTML al que se pueda acceder de manera separada, pues todo el contenido de la aplicación será cargado y renderizado dentro del mismo archivo index.html.

 Dentro de este contexto, aunque solo tengamos un archivo, seguimos contando con la posibilidad de tener varias vistas que se irán intercambiando en su visualización, produciendo así el efecto de que dentro de la aplicación existen varias "páginas" o "archivos" de contenido, cuando la realidad es que todo se está mostrando desde un único archivo.

 Una SPA ofrece, a su vez, una experiencia de usuario bastante agradable y fluida. Al no tener que cargar otro archivo distinto, la carga de contenido será mucho más rápida. Y es aquí en donde el Virtual DOM de React cobra un real protagonismo. Gracias a su existencia será posible identificar qué contenido de la vista tiene que cambiar y qué contenido tiene que mantenerse.
 */
//

//REACT ROUTER DOM
 /* React funciona como una SPA (Simple Page Aplication), por lo que prácticamente tiene una sola página pero
 con muchas vistas. el problema está en como poder navegar por la spa para ver todo el contenido, como si de
 navegar colocando una url se tratase, pero sin ir a otra página. Para eso existe React Router.  
 */
 /*
 Para permitir que nuestra aplicación de React se comporte como un SPA real, tendremos que instalar React Router DOM para que nos permita gestionar el sistema de ruteo de una manera óptima e inteligente, y así poder renderizar los componentes de la aplicación selectivamente dependiendo de la ruta presente en la barra de direcciones del navegador.
 */
 //INSTALACIÓN
 //1- hacemos un npm install del paquete react-router-dom: npm install react-router-dom
 //2- hacemos un import de los métodos que vamos a necesitar de React Router Dom en nuestro archivo app.js
 // import {BrowserRouter, Link, Route} from 'react-router-dom'
//

//COMPONENTES DE REACT ROUTER DOM
 /*
 Cuando importamos react router llamamos a métodos específicos porque dichos métodos son componentes que nos van a permitir configurar nuestro sistema de navegación dentro de nuestra SPA.
 */

 //BrowserRouter
 // Este componente es el enrutador general y necesario para la administración de rutas de nuestro proyecto. Es como una envoltura de la enrutación del proyecto.
 ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
 );

 //Link
 //
//
  