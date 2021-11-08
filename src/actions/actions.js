import axios from "axios";


export const getProductAllSuccess = (productsAll) => {
	return {
		type: 'GET_PRODUCTS_ALL',
		payload: productsAll
	}
}

export const getProductAll = () => {
	return (dispatch) => {
		axios.get('http://localhost:3001/products')
			.then(res => {
				dispatch(getProductAllSuccess(res.data))
			})
	}
}

export const getCategoriesAllSuccess = (categoriesAll) => {
	return {
		type: 'GET_CATEGORIES_ALL',
		payload: categoriesAll
	}
}

export const getCategoriesAll = () => {
	return (dispatch) => {
		axios.get('http://localhost:3001/categories')
			.then(res => {
				dispatch(getCategoriesAllSuccess(res.data))
			})
	}
}

export const getBrandsAllSuccess = (brandsAll) => {
	return {
		type: 'GET_BRANDS_ALL',
		payload: brandsAll
	}
}

export const getBrandsAll = () => {
	return (dispatch) => {
		axios.get('http://localhost:3001/brands')
			.then(res => {
				dispatch(getBrandsAllSuccess(res.data))
			})
	}
}

export const productFiltered = (payload) => {
	return {
		type: 'GET_FILTERED_PRODUCTS',
		payload
	}
}

export const changeFavoriteStatus = (payload) => {
	return {
		type: 'CHANGE_FAVORITE_STATUS',
		payload
	}
}

export const toWishlist = () => {
	return {
		type: 'TO_WISHLIST'
	}
}

export const resetAllFilters = () => {
	return {
		type: 'RESET_ALL_FILTERS'
	}
}

export const textOfSearch = (payload) => {
	return {
		type: 'GET_TEXT_SEARCH',
		payload
	}
}

export const currentPage = (payload) => {
	return {
		type: 'UPDATE_CURRENT_PAGE',
		payload
	}
}

export const clearWishlist = () => {
	return {
		type: 'CLEAR_WISHLIST'
	}
}

