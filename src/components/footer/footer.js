import React, {useState} from "react";
import './footer.css';
import {ReactComponent as LogoPrev} from "./logo-prev.svg";
import {ReactComponent as LogoNext} from "./logo-next.svg";


const Footer = () => {
	let totalPages = 20;
	const [page, setPage] = useState(2);

	(page < 1) && setPage(1);
	(page > totalPages) && setPage(totalPages);

	const pages = [];
	for (let i = 0; i < totalPages; i++) {
		pages.push(i + 1)
	}

	return (
		<div className="footer">
			<div className="footer__pgnLeft">
				<button className="footer__pgnLeft-icon center_items"
				 onClick={(() => setPage(page - 1))}>
					<LogoPrev />
				</button>
			</div>
			<div className="pagination set-font">
				{pages.map((number, index) =>
					index === (page-1)
						? <a key={index} className="active"
							 onClick={(() => setPage(number))}>{number}</a>
						: <a key={index}
							 onClick={(() => setPage(number))}>{number}</a>)}
			</div>
			<div className="footer__pgnRight">
				<button className="footer__pgnRight-icon center_items"
				onClick={(() => {setPage(page + 1)})}>
					<LogoNext />
				</button>
			</div>
		</div>
	)
}

export default Footer