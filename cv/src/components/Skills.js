import React from 'react';
import { Link } from "react-router-dom";
import data from "./data.json";
import Contact from "./Contact";
function Skills() {
	const skill_worked = data.skill_worked.map((item,index)=>
		<tr key={index}>
			<td><ul>{item.database.map((database,idb)=><li key={idb}>{database.name} {database.version}</li>)}</ul></td>
			<td>{item.backend}</td>
			<td>{item.framework}</td>
			<td>{item.integracion}</td>
			<td><ul>{item.frontend.map((frontend,idb)=><li key={idb}>{frontend.name} {frontend.version}</li>)}</ul></td>
			<td><ul>{item.style.map((style,idb)=><li key={idb}>{style.name} {style.version}</li>)}</ul></td>
		</tr>
	);
	return (
		<div id="main">
			<section id="one">
				<header className="major">
					<h2>MENESES YARANGA, Manrrique</h2>
				</header>
			</section>
			<section style={{overflow:"auto"}}>
				<table className="table table-hover table-bordered">
					<thead>
						<tr style={{textTransform: "uppercase",fontWeight: "bold"}}>
							<th>Base de Datos</th>
							<th>Back - end</th>
							<th>Framework</th>
							<th>Integracion</th>
							<th>Front - End</th>
							<th>Estilo</th>
						</tr>
					</thead>
					<tbody>
						{skill_worked}
					</tbody>
				</table>
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

export default Skills;