import React from "react";
import './filterList.css';
import CheckBox from "./checkBox";


const FilterList = (props) => {
	const {map, title, action} = props;

	const elementCheckBox = []
		for (const [key, value] of map.entries()) {
		elementCheckBox.push(
			<CheckBox
				key={key}
				item={key}
				checked={value}
				action={action}
			/>
		)
	}

	return (
		<div className="category set-font">
			<p className="nameCategory set-font">{title}</p>
			<div className="listCategory">
				<form>
					{ elementCheckBox }
				</form>
			</div>
		</div>
	)
}

export default FilterList