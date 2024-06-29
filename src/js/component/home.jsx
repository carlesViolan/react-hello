import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";
import Jumbotron  from "../component/jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component

const Home = () => {
	return (
		<>
		
		<div className="container">
		<NavBar />
		<div className="row">
					<div className="col-sm-12">
					<Jumbotron />
					</div>
				</div>	
			
				<div className="row">
					<div className="col-sm-12">
						<Card /><Card /><Card /><Card />
					</div>
				</div>				
				<div className="row">
					<div className="col-sm-12">
						<Card /><Card /><Card /><Card />
					</div>
				</div>
		<Footer />	
		</div>
		
		
			
		</>
	);
};

export default Home;
