import React, {useRef, useState} from "react";
import './doubleSlider.css';
import {ReactComponent as LogoThumb} from "./range-thumb-icon.svg";


const DoubleSlider = ({ range }) => {
	let [selectedFrom, setSelectedFrom] = useState(range.min);
	let [selectedTo, setSelectedTo] = useState(range.max);
	let [isMovingThumbLeft, setIsMovingThumbLeft] = useState(false);
	let [isMovingThumbRight, setIsMovingThumbRight] = useState(false);
	const slider = useRef();

	const countLeftValue = () => {
		return (selectedFrom - range.min)/(range.max - range.min) * 100 + '%'
	}

	const countRightValue = () => {
		return (range.max - selectedTo)/(range.max - range.min) * 100 + '%'
	}

	const update = (e) => {
		let rect = slider.current.getBoundingClientRect();
		let value = range.min +
			Math.round((e.clientX - rect.left) / rect.width * (range.max - range.min))
		if (value < range.min) {
			value = range.min
		} else if (value > range.max) {
			value = range.max
		} else if (isMovingThumbLeft && value > selectedTo) {
			value = selectedTo
		} else if (isMovingThumbRight && value < selectedFrom) {
			value = selectedFrom
		}
		return value
	}


	return (
		<div className="range-slider"
			 onMouseUp={(() => {
				 setIsMovingThumbLeft(false);
				 setIsMovingThumbRight(false);
			 })}
			 onMouseMove={(e => {
			 	isMovingThumbLeft && setSelectedFrom(update(e));
				isMovingThumbRight && setSelectedTo(update(e));
			 })}>
			<p className="filter-name">{range.filterName}</p>
			<span>{selectedFrom}</span>
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
			<span>{selectedTo}</span>
		</div>
	)
}

export default DoubleSlider