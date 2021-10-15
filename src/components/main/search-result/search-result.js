import React from "react";
import './search-result.css'
import {ReactComponent as LogoSearchResult} from "./logo-search-result.svg";


const SearchResult = () => {
	return (
		<div className="main__right-top">
			<div className="textFilter set-font">7,618 results found</div>
			<div className="contButton">
				<button className="buttonHeart">
					<LogoSearchResult />
				</button>
			</div>
		</div>
	)
}

export default SearchResult