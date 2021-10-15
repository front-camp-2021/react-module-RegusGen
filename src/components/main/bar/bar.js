import React from "react";
import './bar.css';
import {ReactComponent as LogoLine} from "./logoLine.svg";
import DoubleSlider from "./doubleSlider/doubleSlider";
import FilterList from "./filterList/filterList";
import {categoryFilterConfig} from "./config";
import {brandFilterConfig} from "./config";


const Bar = () => {
	const titleCategory = 'Category';
	const titleBrand = 'Brand';

	const rangePrice = {
		min: 0,
		max: 85000,
		filterName: 'Price'
	};

	const rangeRating = {
		min: 0,
		max: 5,
		precision: 2,
		filterName: 'Rating'
	};

	return (
		<div className="main__left-bar">
			<div className="nameMultiRange set-font">
				Multi Range
				<DoubleSlider range={rangePrice} />
				<DoubleSlider range={rangeRating} />
			</div>
			<div className="line">
				<LogoLine />
			</div>
			<FilterList list={categoryFilterConfig} title={titleCategory} />
			<div className="line">
				<LogoLine />
			</div>
			<FilterList list={brandFilterConfig} title={titleBrand} />
		</div>
	);
}

export default Bar