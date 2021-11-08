import React from "react";
import './search.css'
import {ReactComponent as LogoSearch} from "./logo-search.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectSearch} from "../../../../selectors";
import {textOfSearch} from "../../../../actions/actions";


const Search = () => {

	const dispatch = useDispatch();

	const textSearch = useSelector(selectSearch);

	return (
		<div className="main__right-search">
			<div className="wrap">
				<form
					className="search"
				>
					<input
						type="text"
						className="searchTerm"
						placeholder="Search"
						value={textSearch}
						onChange={(e) => {
								dispatch(textOfSearch(e.target.value))
						}}/>
						<button className="searchButton center_items">
							<LogoSearch />
						</button>
				</form>
			</div>
		</div>
	)
}

export default Search