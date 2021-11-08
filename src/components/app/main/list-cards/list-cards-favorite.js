import React from "react";
import {useSelector} from "react-redux";

import {CardList} from "./card/card-list";
import './list-cards.css'
import {selectProductsFavorite} from "../../../../selectors";


const ListCardFavorite = () => {

	const products = useSelector(selectProductsFavorite)

	return <CardList products={products} isFavorite={true} />
}

export default ListCardFavorite

