import React, {useEffect} from "react";
import './bar.css';
import {ReactComponent as LogoLine} from "./logoLine.svg";
import DoubleSlider from "./doubleSlider/doubleSlider";
import FilterList from "./filterList/filterList";
import {useDispatch, useSelector} from "react-redux";
import {
	selectBrands,
	selectCategories,
	selectPriceFrom,
	selectPriceTo,
	selectRatingFrom,
	selectRatingTo
} from "../../../../selectors";
import { getBrandsAll, getCategoriesAll} from "../../../../actions/actions";


const Bar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategoriesAll());
		dispatch(getBrandsAll());
	}, [dispatch])

	const categoriesEdited = useSelector(selectCategories);

	const categories = new Map();
	let keyNew;
	for (const [key, value] of categoriesEdited.entries()) {
		if (key.length < 4) {
			keyNew = key.toUpperCase()
		} else {
			keyNew = key.charAt(0).toUpperCase() + key.slice(1)
				.replace('_', ' ')
		}
		categories.set(keyNew,value)
	}

	const brandsEdited = useSelector(selectBrands);

	const brands = new Map();
	let keyBrandNew;
	for (const [key, value] of brandsEdited.entries()) {
		if (key.length < 4) {
			keyBrandNew = key.toUpperCase()
		} else {
			keyBrandNew = key.charAt(0).toUpperCase() + key.slice(1)
										.replace('4-', '4')
		}
		brands.set(keyBrandNew,value)
	}

	const selectedFromPrice = useSelector(selectPriceFrom);
	const selectedToPrice = useSelector(selectPriceTo);
	const selectedFromRating = useSelector(selectRatingFrom);
	const selectedToRating = useSelector(selectRatingTo);

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
				<DoubleSlider
					range={rangePrice}
					action='CHANGE_RANGE_PRICE'
					selected={{from: selectedFromPrice,
								to: selectedToPrice}}
				/>
				<DoubleSlider
					range={rangeRating}
					action='CHANGE_RANGE_RATING'
					selected={{from: selectedFromRating,
						to: selectedToRating}}
				/>
			</div>
			<div className="line">
				<LogoLine />
			</div>
				<FilterList
					map={categories}
					title={titleCategory}
					action='ADD_ACTIVE_CATEGORY'
				/>
				<div className="line">
					<LogoLine />
				</div>
				<FilterList
					map={brands}
					title={titleBrand}
					action='ADD_ACTIVE_BRAND'
				/>
		</div>
	);
}

export default Bar