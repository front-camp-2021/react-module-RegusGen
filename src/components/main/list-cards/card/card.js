import React from "react"
import './card.css'
import {ReactComponent as LogoRating} from "./logo-rating.svg"
import {ReactComponent as LogoWishlist} from "./logo-wishlist.svg"
import {ReactComponent as LogoAddTooCart} from "./logo-add-to-cart.svg"

const Card = (props) => {
	return (
		<div className="frame-big">
			<div className="frame">
				<div className="image">
					<img src={props.images[0]} alt={props.title} width="85%"  />
				</div>
				<div className="grade_price">
					<div className="grade">
						<div className="grade_numbers align_center">{props.rating}<LogoRating /></div>
					</div>
					<div className="price">{props.price}</div>
				</div>
				<div className="mame">{props.title}</div>
				<div className="note">{props.category}>>{props.brand}</div>
				<div className="button_wrapper">
					<button className="button button_wishlist align_center">
						<LogoWishlist />WISHLIST</button>
					<button className="button button_cart align_center">
						<LogoAddTooCart />ADD TO CART</button>
				</div>
			</div>
		</div>
	);
}

export default Card