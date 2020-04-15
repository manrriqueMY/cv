import React from 'react';
import Footer from './Footer';
function Header() {
	return (<header id="header">	
				<div className="inner">					
					<a href="#!" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					<br />
					<a href="#!" onClick={window.doGTranslate.bind(this,'es|en')} title="English" className="gflag nturl" style={{backgroundPosition:'-0px -0px'}}>
						<img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="English" />
					</a>
					<a href="#!" onClick={window.doGTranslate.bind(this,'es|es')} title="Spanish" className="gflag nturl" style={{backgroundPosition:'-600px -200px'}}>
						<img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Spanish" />
					</a>
					<div id="google_translate_element2"></div>
					<h1><strong>Soy Manrrique </strong> MENESES YARANGA <br /> Analista - Programador de Sistemas<br /></h1>
				</div>
				<Footer />
			</header>);
}
export default Header;