import React from "react";
import './name.css'
import {ReactComponent as Logo} from "./logo.svg";


const Name = () => {
	return (
		<div className="header__name">
			<div className="header__name-icon">
				<Logo />
			</div>
			<p className="header__name-text set-font">Online Store</p>
		</div>
	)
}

export default Name