import React from "react";
import Card from "./card.jsx";

function jumbotron (){
//include images into your bundle

    return(
     
        <div class="jumbotron">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>A Warm Welcome</h1>      
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá 
              con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
               menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. </p>
               <a href="#" class="btn btn-primary">Call to action</a>
               
           
          </div>
        </div>
        </div>
          
        
              );
          };
//create your first component


export default jumbotron;