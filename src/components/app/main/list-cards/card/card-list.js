import React from "react";
import Card from "./card";



export const CardList = (props) => {
	const {products, isFavorite} = props;
	return (
		<div className={isFavorite ? "grid_container-favorite" : 'grid_container'}>
			{
				products.map((productData) => {
					const {id, images, title, rating, price, category, brand, isFavorite } = productData;

					return (
						<div key={id}>
							<Card
								id={id}
								images={images}
								title={title}
								rating={rating}
								price={price}
								category={category}
								brand={brand}
								isFavorite={isFavorite}
							/>
						</div>
					)
				})
			}
		</div>
	)
}