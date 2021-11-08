import React from "react";
import './header.css';
import Name from "./name/name";
import Menu from "./menu/menu";


function Header() {
	return (
		<div className="header">
			<Name />
			<Menu />
		</div>
	)
}

export default Header