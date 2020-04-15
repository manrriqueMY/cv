import React from 'react';
import { Link } from "react-router-dom";
import data from "./data.json";
import Contact from "./Contact";
function Main() {
	const skill_personal = data.skill_personal.map((item,index)=><li key={index}>{item.skill}</li>);
	const skill_know = data.skill_know.map((item,index)=>
		<article key={index} className="col-6 col-12-xsmall work-item">
			<a href={item["image-2"]} className="image fit thumb"><img src={item["image-1"]} alt="" /></a>
			<h3>{item.skill} {item.version}</h3>
			<ul>{item.framework.map((skil,key)=><li key={key}>{skil.sdk} {skil.version}</li>)}</ul>
		</article>
	);
	return (<div id="main">
				<section id="one">
					<header className="major">
						<h2>MENESES YARANGA, Manrrique<br />
						Analista - Programador</h2>
					</header>
					<p>Nacido el 25/09/1994, con formacion académica superior con el grado de Bachiller en Ingenieria de Sistemas, de la Univeridad Nacional San Cristobal de Huamanga (Ayacucho - Perú).</p>
					<p>Desarrollador FullStack [ Analisis, Diseño, Base de Datos, Back-end, Front-end, Despliegue en Servidor, Documentacion ]</p>
					<p>Mobile [ React Native | Expo ]</p>
					<ul>
						{skill_personal}
					</ul>
					<ul className="actions">
						<li><Link className="button" to="/about">Leer Mas ...</Link></li>
					</ul>
				</section>

				<section id="two">
					<h2>He Trabajado</h2>
					<div className="row">
						{skill_know}
					</div>
					<ul className="actions">
						<li><Link className="button" to="/skils">Todas las Habilidades ...</Link></li>
					</ul>
				</section>
				<Contact />
		</div>);
}

export default Main;