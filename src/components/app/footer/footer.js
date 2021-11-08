import React from "react";
import './footer.css';
import {ReactComponent as LogoPrev} from "./logo-prev.svg";
import {ReactComponent as LogoNext} from "./logo-next.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, selectTotalPages} from "../../../selectors";
import {currentPage} from "../../../actions/actions";


const Footer = () => {
	let page = useSelector(selectCurrentPage);
	let totalPages = useSelector(selectTotalPages);
	const dispatch = useDispatch();

	return (
		<div className="footer">
			<div className="footer__pgnLeft">
				{totalPages
					? <button className="footer__pgnLeft-icon center_items"
					 onClick={(() => dispatch(currentPage(page - 1)))}>
						<LogoPrev />
					</button>
					: ''}
			</div>
			<div className="pagination set-font">
				{Array(totalPages).fill().map((_,i) => i+1).map((number, index) =>
					index === (page-1)
						? <div key={index}
							 className="active"
							 onClick={(() => dispatch(currentPage(number)))}>
							{number}
							</div>
						: <div key={index}
							 onClick={(() => dispatch(currentPage(number)))}>
							{number}
							</div>)}
			</div>
			<div className="footer__pgnRight">
				{totalPages
				?<button className="footer__pgnRight-icon center_items"
					onClick={(() => dispatch(currentPage(page + 1)))}>
						<LogoNext />
					</button>
				: ''}
			</div>
		</div>
	)
}

export default Footer