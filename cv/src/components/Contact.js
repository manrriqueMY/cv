import React from 'react';
function Contact() {
	return(
		<section id="three">
			<h2>Contactos</h2>
			<p>Para desarrollos de sistemas web's, Páginas web, API's, Incluso investigar temas específicos, Testear sistemas, 
			Juegos, Validaciones, Prueba de API's, Prueba de Framework, Consultas, Comparaciones, o solo para desarrollar temporalmente hasta finalizar el proyecto.</p>
			<p>Cercado de Lima - Perú</p>
			<div className="row">
				{/*
					<div className="col-8 col-12-small">
						<form method="post" id="msg">
							<div className="row gtr-uniform gtr-50">
								<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Nombre" required /></div>
								<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Correo Electrónico" required /></div>
								<div className="col-12"><textarea name="message" id="message" placeholder="Mensage" rows="4" required></textarea></div>
							</div>
							<ul className="actions">
								<li><input type="submit" value="Enviar Mensage" /></li>
							</ul>
						</form>
					</div>
				*/}
				<div className="col-4 col-12-small">
					<ul className="labeled-icons">
						<li>
							<h3 className="icon solid fa-home"><span className="label">Dirección</span></h3>
							Av. Alejandro Bertello 1077<br />
							Lima Cercado<br />
							Perú
						</li>
						<li>
							<h3 className="icon solid fa-mobile-alt"><span className="label">Celular</span></h3>
							+51 910103845
						</li>
						<li>
							<h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
							<a href="mailto:manrrique.my@gmail.com">manrrique.my@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contact;