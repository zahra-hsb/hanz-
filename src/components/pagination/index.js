import { useEffect, useState } from "react";

const Pagination = ({ data, sendDataToParent }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [visibleServices, setVisibleServices] = useState([])

    const itemsPerPage = 6;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    useEffect(() => {
        setVisibleServices(data.slice(startIndex, endIndex));
    }, [startIndex, endIndex]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    sendDataToParent(visibleServices)

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <p onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </p>
                    </li>
                    {pages.map((page) => (
                        <li key={page}>
                            <p onClick={() => handlePageChange(page)} className={`${currentPage === 1 ? 'disabled' : ''} cursor-pointer flex items-center justify-center px-3 h-8 leading-tight ${currentPage === page ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>{page}</p>
                        </li>
                    ))}
                    <li>
                        <p onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </p>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Pagination;
