import React from 'react';
import { Link } from "react-router-dom";
import data from "./data.json";
import Contact from "./Contact";
function About() {
	return (
		<div id="main">
			<section id="one">
				<header className="major">
					<h2>MENESES YARANGA, Manrrique</h2>
				</header>
			</section>

			<section id="two">
				<ul className="actions">
					<li><Link className="button" to="/">Regresar ...</Link></li>
				</ul>
			</section>
			<Contact />
		</div>
	);
}

export default About;