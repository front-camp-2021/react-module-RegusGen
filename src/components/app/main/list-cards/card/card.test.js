import Card from "./card";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../../../../store";


describe('Testing of component Card', () => {
	const defaultProps = {
		images: ["https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg"],
		title: "Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black",
		rating: 3.2,
		price: 22500
	}

	test('Testing  properties of component Card', () => {
		render(
			<Provider store={store}>
				<Card
					{...defaultProps}
				/>
			</Provider>
		);

		expect(screen.getByTestId('images')).toBeVisible();
		expect(screen.getByTestId('title')).toHaveTextContent(defaultProps.title);
		expect(screen.getByTestId('rating')).toHaveTextContent(defaultProps.rating);
		expect(screen.getByTestId('price')).toHaveTextContent(defaultProps.price);
	})

})