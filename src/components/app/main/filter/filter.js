import React from "react";
import './filter.css'
import {ReactComponent as LogoFilter} from "./logo-filter.svg";


const Filter = () => {
	return (
		<div className="main__left-filter">
			<p className="textFilter set-font">Filters</p>
			<div className="contButton">
				<button className="buttonFilter">
					<LogoFilter />
					<LogoFilter />
				</button>
			</div>
		</div>
	)
}

export default Filter