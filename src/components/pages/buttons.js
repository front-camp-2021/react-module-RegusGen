import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as LogoMenu} from "../app/header/menu/logo-menu.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectProductsFavorite} from "../../selectors";
import {clearWishlist} from "../../actions/actions";


export const Buttons = () => {
	const dispatch = useDispatch();
	const quantityFavorite = useSelector(selectProductsFavorite).length;

	return (
		<div className="main__top">
			<div className="textFilter set-font">
				{quantityFavorite} results found
			</div>
			<button
				className="buttonClearWishlist set-font"
				onClick={() => dispatch(clearWishlist())}
			>
				CLEAR WISHLIST
			</button>
			<div className="contButton">
				<Link to="/">
					<button
						className="buttonHome"
					>
						<LogoMenu />
					</button>
				</Link>
			</div>
		</div>
	)
}