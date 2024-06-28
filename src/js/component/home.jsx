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
		
		<div class="container">
		<NavBar />
			<Jumbotron />
			<Card /><Card /><Card /><Card /><Card />
			<Card /><Card /><Card /><Card /><Card />
		<Footer />	
		</div>
		
		
			
		</>
	);
};

export default Home;
