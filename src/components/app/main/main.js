import React from "react";
import './main.css';
import ListCards from "./list-cards/list-cards";
import Search from "./search/search";
import SearchResult from "./search-result/search-result";
import Filter from "./filter/filter";
import Bar from "./bar/bar";
import ButtonClear from "./button-clear/button-clear";


const Main = () => {
	return (
		<div className="main">
			<div className="main__left">
				<Filter />
				<Bar />
				<ButtonClear />
			</div>
			<div className="main__right">
				<SearchResult />
				<Search />
				<ListCards />
			</div>
		</div>
	)
}

export default Main