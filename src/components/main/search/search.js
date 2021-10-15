import React from "react";
import './search.css'
import {ReactComponent as LogoSearch} from "./logo-search.svg";


const Search = () => {
	return (
		<div className="main__right-search">
			<div className="wrap">
				<div className="search">
					<input type="text" className="searchTerm" placeholder="Search" />
						<div className="searchButton center_items">
							<LogoSearch />
						</div>
				</div>
			</div>
		</div>
	)
}

export default Search