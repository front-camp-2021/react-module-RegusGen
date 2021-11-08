import React from "react";
import './filterList.css';
import {useDispatch} from "react-redux";


const CheckBox = (props) => {
	const {item, action, checked} = props;

	const dispatch = useDispatch();

	return (
		<>
			<input type="checkbox"
				   id={item}
				   checked={checked}
				   onChange={() => {
					   dispatch({
						   type: action,
						   payload: {
							   item: item,
							   checked: !checked
						   }
					   })
				   }}
		   	/>
			<label htmlFor={item}>{item}</label><br/>
		</>
	)
}

export default CheckBox