import React, {useState} from "react";
import './filterList.css';


const CheckBox = ({item}) => {
	const [checked, setChecked] = useState(false);
	return (
		<>
			<input type="checkbox" id={item.value}
				   onChange={() => setChecked(!checked)} defaultChecked={checked}/>
			<label htmlFor={item.value}>{item.title}</label><br/>
		</>
	)
}

export default CheckBox