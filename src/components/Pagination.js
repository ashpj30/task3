import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, setCurrentPage, totalNews, newsPerPage }) => {
	const totalPages = Math.ceil(totalNews / newsPerPage);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<ul className="pagination">
			<li className={`page-item ${currentPage === 1 && `disable`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                &lsaquo;
				</button>
			</li>
	
      {pages.map((page) => (
				<li
					key={page}
					className={`page-item1 ${page === currentPage && `active`}`}
					onClick={() => setCurrentPage(page)}
				>
					<button className="page-link1">{page}</button>
				</li>
			))}

			<li className={`page-item ${currentPage === totalPages && `disable`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
					&rsaquo;
				</button>
			</li>
		</ul>
	);
};

export default Pagination;