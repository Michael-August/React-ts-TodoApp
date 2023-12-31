const Pagination = ({ currentPage, totalPages, onPageChange, goToPage }: {currentPage: number, totalPages: number, onPageChange: any, goToPage: any}) => {
    const pageNeighbours = 5

    const leftBound = Math.max(1, currentPage - pageNeighbours);
    const rightBound = Math.min(totalPages, currentPage + pageNeighbours);    
    return ( 
        <>
            <div className="pagination mt-5 mb-5 flex items-center justify-between">
                <button
                    className="hidden md:block"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src="/assets/images/icons/arrow-left.png" alt="" />
                </button>

                {leftBound > 1 && (
                    <button className="page p-3 text-zinc-500 md:text-sm xs:text-xs" onClick={() => goToPage(1)}>1</button>
                )}

                {leftBound > 2 && <span className="page p-3 text-zinc-500 md:text-sm xs:text-xs">...</span>}
                <div className="pages flex items-center">
                    {Array.from({ length: rightBound - leftBound + 1 }).map((_, index) => (
                        <div key={leftBound + index} className="page p-3 text-zinc-500 md:text-sm xs:text-xs">
                            <button
                                onClick={() => goToPage(leftBound + index)}
                                className={leftBound + index === currentPage ? 'active-page' : ''}
                            >
                                {leftBound + index}
                            </button>
                        </div>
                    ))}
                </div>
                    {rightBound < totalPages - 1 && <span className="page p-3 text-zinc-500 md:text-sm xs:text-xs">...</span>}
                    {rightBound < totalPages && (
                    <button className="page p-3 text-zinc-500 md:text-sm xs:text-xs" onClick={() => goToPage(totalPages)}>{totalPages}</button>
                )}

                <button
                    className="hidden md:block"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <img src="/assets/images/icons/arrow-right.png" alt="" />
                </button>
            </div>
        </>
    );
}
 
export default Pagination;