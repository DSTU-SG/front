import React from 'react';
import classes from './Pagination.module.scss';

const Pagination = ({totalPages, page, changePage}) => {
    
    const getPagesArray = (totalPages) => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result;
    }



    let pagesArray = getPagesArray(totalPages);
    return (    
        <div className={classes.page__wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? classes.page__current : classes.page}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;