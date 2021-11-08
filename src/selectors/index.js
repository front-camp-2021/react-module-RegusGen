export const selectProductAll = (state) => state.productsAll;

export const selectCategories = (state) => state.categories;

export const selectBrands = (state) => state.brands;

export const selectPriceFrom = (state) => state.selectedFromPrice;

export const selectPriceTo = (state) => state.selectedToPrice;

export const selectRatingFrom = (state) => state.selectedFromRating;

export const selectRatingTo = (state) => state.selectedToRating;

export const selectProductQuantity = (state) => state.quantityProducts;

export const selectSearch = (state) => state.textSearch;

export const selectCurrentPage = (state) => state.currentPage;

export const selectTotalPages = (state) => state.totalPages;

export const selectProductLimit = (state) => state.productLimitOnPage;

export const selectProductsFavorite = (state) => state.productsFavorite;
