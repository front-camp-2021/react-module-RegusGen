import React from "react";
import Card from "./card/card";
import {products} from "./card/products";
import './list-cards.css'

const ListCards = () => {

	const productCard = products.map((productData) => {
		const {id, ...data} = productData;
		return (
			<div key={id}>
				<Card {...data} />
			</div>
		)
	})
	return (
		<div className="grid_container">
			{ productCard }
		</div>
	)
}

export default ListCards