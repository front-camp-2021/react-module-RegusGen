import React, {useRef, useState} from "react";
import './doubleSlider.css';
import {ReactComponent as LogoThumb} from "./range-thumb-icon.svg";
import {useDispatch} from "react-redux";


const DoubleSlider = ({ range, action, selected}) => {
	const {min, max, filterName} = range;

	let [isMovingThumbLeft, setIsMovingThumbLeft] = useState(false);
	let [isMovingThumbRight, setIsMovingThumbRight] = useState(false);

	const slider = useRef();

	const countLeftValue = () => {
		return (selected.from - min)/(max - min) * 100 + '%'
	}

	const countRightValue = () => {
		return (max - selected.to)/(max - min) * 100 + '%'
	}

	const update = (e) => {
		let rect = slider.current.getBoundingClientRect();
		let value = min +
			Math.round((e.clientX - rect.left) / rect.width * (max - min))
		if (value < min) {
			value = min
		} else if (value > max) {
			value = max
		} else if (isMovingThumbLeft && value > selected.to) {
			value = selected.to
		} else if (isMovingThumbRight && value < selected.from) {
			value = selected.from
		}
		return value
	}

	const dispatch = useDispatch();


	return (
		<div className="range-slider"
			 onMouseUp={(() => {
				 setIsMovingThumbLeft(false);
				 setIsMovingThumbRight(false);
			 })}
			 onMouseMove={(e => {
			 	if (isMovingThumbLeft)
			 	{dispatch({
					type: action,
					payload: {selectedFrom: update(e),
							  selectedTo: selected.to}
				})}
				if(isMovingThumbRight)
				{dispatch({
					type: action,
					payload: {selectedFrom: selected.from,
							  selectedTo: update(e)}
				})}
			 })}>
			<p className="filter-name">{filterName}</p>
			<span>{selected.from}</span>
			<div className="range-slider__inner"
				ref={slider}>
                <span className="range-slider__progress"
					  style={{left: countLeftValue(), right: countRightValue()}}/>
				<span className="range-slider__thumb-left"
					  style={{left: countLeftValue()}}
						onMouseDown={(() => setIsMovingThumbLeft(true))}>
					<LogoThumb />
				</span>
				<span className="range-slider__thumb-right"
					  style={{right: countRightValue()}}
						onMouseDown={(() => setIsMovingThumbRight(true))}>
					<LogoThumb />
				</span>
			</div>
			<span>{selected.to}</span>
		</div>
	)
}

export default DoubleSlider