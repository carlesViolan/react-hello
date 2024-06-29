import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function card (){
    
    let amplada = "18rem";
    

    return  (
        //A grey horizontal navbar that becomes vertical on small screens -->
        
        <div className="container">

            <div className="card text-center " style={{width: 18 + 'em'}}>
                    
                        <div className="card-body">
                        <div className="card-img-top">
                        <img src="" className="" alt="..."/>
                        </div>
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
            </div>
        </div>
                );
            };
  


export default card;