import React from "react";
import './menu.css'
import {ReactComponent as LogoMenu} from "./logo-menu.svg";
import SignMenu from "./sign-menu/sign-menu";
import {Link} from "react-router-dom";


const Menu = () => {
	return (
		<div className="header__menu">
			<Link to="/"
				  className="header__menu-icon center_items">
				<LogoMenu />
			</Link>
			<SignMenu />
			<SignMenu />
			<p className="header__menu-section center_items set-font">eCommerce</p>
			<SignMenu />
			<SignMenu />
			<p className="header__menu-subsection center_items set-font">Electronics</p>
		</div>
	)
}

export default Menu