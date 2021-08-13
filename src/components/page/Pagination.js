import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <ul key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </ul>
        ))}
      
      </ul>
    </nav>
  );
};

export default Pagination;