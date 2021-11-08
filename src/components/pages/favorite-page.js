import React from "react";
import Header from "../app/header/header";
import ListCardFavorite from "../app/main/list-cards/list-cards-favorite";
import {Buttons} from "./buttons";


const FavoritePage = () => {
	return (
		<div className="store">
			<Header />
			<Buttons />
			<ListCardFavorite />
		</div>
	)
}

export default FavoritePage