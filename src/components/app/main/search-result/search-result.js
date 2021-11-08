import React from "react";
import './search-result.css'
import {ReactComponent as LogoSearchResult} from "./logo-search-result.svg";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectProductQuantity} from "../../../../selectors";
import {toWishlist} from "../../../../actions/actions";



const SearchResult = () => {

	const quantity = useSelector(selectProductQuantity);

	const dispatch = useDispatch();

	return (
		<div className="main__right-top">
			<div className="textFilter set-font">{quantity} results found</div>
			<div className="contButton">
				<Link to="/favorite">
					<button
						className="buttonHeart"
						onClick={() => dispatch(toWishlist())}>
						<LogoSearchResult />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default SearchResult