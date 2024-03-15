import { useEffect, useState } from "react";

const getPages = (totalpages, maxVisiblePageCount, activePage) => {

    const maxResultSize = totalpages > maxVisiblePageCount ? maxVisiblePageCount : totalpages;
    const startingPage = activePage + maxResultSize > totalpages ? totalpages - maxResultSize + 1 : activePage;
    return [...Array(maxResultSize)].map((_, idx) => {
        return startingPage + idx;
    });
}
const Pagination = ({ onchangePage }) => {
    const totalpages = 15;
    const maxVisiblePageCount = 10;


    const [pages, setPages] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const changePage = (e) => {
        let selectedPageNo = 0;
        if (e.target.dataset.id === "PREVIOUS") {
            selectedPageNo = activePage - 1;
        }
        else if (e.target.dataset.id === "NEXT") {
            selectedPageNo = activePage + 1;
        } else {
            selectedPageNo = Number(e.target.dataset.id);
        }

        //console.log(e.target.dataset.id);

        setActivePage(selectedPageNo);
        onchangePage(selectedPageNo);
    };
    useEffect(() => {
        const newPages = getPages(totalpages, maxVisiblePageCount, activePage);
        setPages(newPages);
    }, [activePage])

    return (
        <div className="pagination">
            <button className="page-button" disabled={activePage === 1} data-id={"PREVIOUS"} onClick={changePage}>Prev</button>
            {
                pages.map((page) => (<button className={`page-button ${activePage == page ? 'active' : ''}`} data-id={page} onClick={changePage}>{page}</button>))
            }
            <button className="page-button" disabled={activePage === totalpages} data-id={"NEXT"} onClick={changePage}>Next</button>
        </div>
    )
}

export default Pagination;
