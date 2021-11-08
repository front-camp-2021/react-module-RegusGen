import React from "react";
import './button-clear.css'
import {useDispatch} from "react-redux";
import {resetAllFilters} from "../../../../actions/actions";


const ButtonClear = () => {

	const dispatch = useDispatch();

	return (
		<div className="main__left-button">
			<button
				className="buttonClear set-font center_items"
				onClick={() => dispatch(resetAllFilters())}
			>
				CLEAR ALL FILTERS
			</button>
		</div>
	)
}

export default ButtonClear