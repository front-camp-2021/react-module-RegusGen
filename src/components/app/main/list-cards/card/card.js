import React from "react"
import './card.css'
import {ReactComponent as LogoRating} from "./logo-rating.svg"
import {ReactComponent as LogoWishlist} from "./logo-wishlist.svg"
import {ReactComponent as LogoAddTooCart} from "./logo-add-to-cart.svg"
import {useDispatch} from "react-redux";
import {changeFavoriteStatus} from "../../../../../actions/actions";

const Card = (props) => {
	const dispatch = useDispatch();
	const {images, title, rating, price, category, brand, id} = props;
	return (
		<div className="frame-big">
			<div className="frame">
				<div className="image">
					<img src={images[0]} alt={title} data-testid='images'/>
				</div>
				<div className="grade_price">
					<div className="grade">
						<div
							className="grade_numbers align_center"
							data-testid='rating'>
							{rating}
							<LogoRating />
						</div>
					</div>
					<div className="price" data-testid='price'>{price}</div>
				</div>
				<div className="mame" data-testid='title'>{title}</div>
				{/*<div className="note">{category}>>{brand}</div>*/}
				<div className="button_wrapper">
					<button
						className="button button_wishlist align_center"
						data-testid={'wishlist'}
							onClick={() => dispatch(changeFavoriteStatus(id))}>
						<LogoWishlist />
						WISHLIST
					</button>
					<button className="button button_cart align_center">
						<LogoAddTooCart />
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card