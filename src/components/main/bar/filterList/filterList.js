import React from "react";
import './filterList.css';
import CheckBox from "./checkBox";


const FilterList = (props) => {
	const elementCheckBox = props.list.map((item, index) => {
		return (
			<CheckBox
				key={index}
				item={item}
			/>
		)
	})
	return (
		<div className="category set-font">
			<p className="nameCategory set-font">{props.title}</p>
			<div className="listCategory">
				<form>
					{ elementCheckBox }
				</form>
			</div>
		</div>
	)
}

export default FilterList