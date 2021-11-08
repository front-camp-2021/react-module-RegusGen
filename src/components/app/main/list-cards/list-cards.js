import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './list-cards.css';
import {
	selectBrands,
	selectCategories, selectCurrentPage,
	selectPriceFrom,
	selectPriceTo, selectProductAll, selectProductLimit,
	selectRatingFrom,
	selectRatingTo, selectSearch
} from "../../../../selectors";
import {productFiltered} from "../../../../actions/actions";
import {getProductAll} from "../../../../actions/actions";
import {CardList} from "./card/card-list";


const ListCards = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectProductAll)

	useEffect(() => {
		dispatch(getProductAll());
	}, [dispatch])

	const categoriesAll = useSelector(selectCategories);
	const brandsAll = useSelector(selectBrands);

	const selectedFromPrice = useSelector(selectPriceFrom);
	const selectedToPrice = useSelector(selectPriceTo);
	const selectedFromRating = useSelector(selectRatingFrom);
	const selectedToRating = useSelector(selectRatingTo);

	const textSearch = useSelector(selectSearch);

	const listProducts = products
		.filter((product) => ![...categoriesAll].filter(([_, val]) => val).length || categoriesAll.get(product.category))
		.filter((product) => ![...brandsAll].filter(([_, val]) => val).length || brandsAll.get(product.brand))
		.filter((product) => product.price >= selectedFromPrice && product.price <= selectedToPrice)
		.filter((product) => product.rating >= selectedFromRating && product.rating <= selectedToRating)
		.filter((product) => !textSearch.length || product.title.toLowerCase().includes(textSearch))


	useEffect(() => {
		dispatch(productFiltered(listProducts));
	}, [dispatch, listProducts])

	const currentPage = useSelector(selectCurrentPage);
	const productLimit = useSelector(selectProductLimit);

	const startIndex = currentPage * productLimit - productLimit;
	const endIndex = startIndex + productLimit;

	const listProductsPage = listProducts.slice(startIndex, endIndex)

	return <CardList products={listProductsPage} isFavorite={false} />
}

export default ListCards