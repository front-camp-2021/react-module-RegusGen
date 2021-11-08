
export const initialState = {

	productsAll: [],
	products: [],
	productsFavorite: [],
	categories: [],
	brands: [],
	selectedFromPrice: 0,
	selectedToPrice: 85000,
	selectedFromRating: 0,
	selectedToRating: 5,
	textSearch: '',
	currentPage: 1,
	totalPages: 0,
	productLimitOnPage: 0,
	quantityProducts: 0
}


const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'GET_PRODUCTS_ALL':
			return {
				...state,
				productsAll: action.payload
			}

		case 'GET_CATEGORIES_ALL':
			let listAllCategories = new Map();
			action.payload.forEach((item) => {

				const itemEdited = item.toLowerCase()
					.replace(' ', '_');
				listAllCategories.set(itemEdited, false)
			})
			return {
				...state,
				categories: listAllCategories
			}

		case 'GET_BRANDS_ALL':
			let listAllBrands = new Map();
			action.payload.forEach((item) => {

				const itemBrandEdited = item.toLowerCase()
					.replace('4', '4-');
				listAllBrands.set(itemBrandEdited, false)
			})
			return {
				...state,
				brands: listAllBrands
			}

		case 'GET_FILTERED_PRODUCTS':
			let width = window.innerWidth;
			let productLimit;
			if (width > 1200) {
				productLimit = 9
			} else if (width > 720) {
				productLimit = 6
			} else {
				productLimit = 3
			}
			let totalPages = Math.ceil(action.payload.length / productLimit)
			return {...state,
				products: action.payload,
				totalPages: totalPages,
				productLimitOnPage: productLimit,
				quantityProducts: action.payload.length
			}

		case 'CHANGE_FAVORITE_STATUS':
			const data = state.products.map((product) =>
			product.id === action.payload
			? {...product, isFavorite: true}
			: product)
			return {...state, products: data}

		case 'TO_WISHLIST':
			const wishList = state.products.filter((product) => product.isFavorite === true)
			return {...state, productsFavorite: wishList}

		case 'CLEAR_WISHLIST':
			return {...state, productsFavorite: initialState.productsFavorite}

		case 'CHANGE_RANGE_PRICE':
			return {...state,
				selectedFromPrice: action.payload.selectedFrom,
				selectedToPrice: action.payload.selectedTo,
				currentPage: initialState.currentPage
				}

		case 'CHANGE_RANGE_RATING':
			return {...state,
				selectedFromRating: action.payload.selectedFrom,
				selectedToRating: action.payload.selectedTo,
				currentPage: initialState.currentPage
				}

		case 'ADD_ACTIVE_CATEGORY':
			const valueCategory = action.payload.item.toLowerCase()
													 .replace(' ', '_');
			const map = state.categories
			map.set(valueCategory, !map.get(valueCategory))

			return {
				...state,
				categories: new Map(map.entries()),
				currentPage: initialState.currentPage
			}

		case 'ADD_ACTIVE_BRAND':
			const valueBrand = action.payload.item.toLowerCase()
												  .replace('4', '4-');

			const mapBrands = state.brands
			mapBrands.set(valueBrand, !mapBrands.get(valueBrand))

			return {
				...state,
				brands: new Map(mapBrands.entries()),
				currentPage: initialState.currentPage
			}

		case 'RESET_ALL_FILTERS':
			const listCategories = new Map()
			state.categories.forEach((value, key) => {
				listCategories.set(key, false)
			})

			const listBrands = new Map()
			state.brands.forEach((value, key) => {
				listBrands.set(key, false)
			})

			return {
				...state,
				selectedFromPrice: initialState.selectedFromPrice,
				selectedToPrice: initialState.selectedToPrice,
				selectedFromRating: initialState.selectedFromRating,
				selectedToRating: initialState.selectedToRating,
				categories: listCategories,
				brands: listBrands
			}

		case 'GET_TEXT_SEARCH':
			return {
				...state,
				textSearch: action.payload.toLowerCase()
			}

		case 'UPDATE_CURRENT_PAGE':
			if (action.payload < 1 || action.payload > state.totalPages) {
				return state;
			}

			return {
				...state,
				currentPage: action.payload
			}

		default:
			return state
	}
}

export default reducer