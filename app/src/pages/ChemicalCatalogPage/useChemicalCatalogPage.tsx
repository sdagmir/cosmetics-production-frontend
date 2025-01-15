import { useEffect, useState } from "react";
import { ChangeEvent } from "../../App.typing";
import { useAppSelector, useAppDispatch } from "../../core/store/hooks.ts";
import { setSearchTitle, fetchChemicalElements } from "../../core/store/slices/appSlice";

export const useChemicalCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { searchTitle, chemicalElementList, isActive, itemsInCart, formulationId } = useAppSelector((state) => state.app);

    const [totalCount, setTotalCount] = useState(6); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [searchTrigger, setSearchTrigger] = useState(false); 
    const pageSize = 30; 

    const handleSearchTitleChange = (e: ChangeEvent) => {
        dispatch(setSearchTitle(e.target.value));
    };

    const handleSearchChemicalElementClick = () => {
        setSearchTrigger((prev) => !prev); 
        setCurrentPage(1); 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page); 
        setSearchTrigger((prev) => !prev); 
    };

    useEffect(() => {
        dispatch(fetchChemicalElements({ title: searchTitle, page: currentPage, page_size: pageSize }))
            .unwrap()
            .then((response) => {
                setTotalCount(response.results.total_count || 6);
            });
    }, [dispatch, searchTrigger, currentPage]); 

    return {
        chemicalElementList,
        formulationId,
        itemsInCart,
        searchTitle,
        isActive,
        currentPage,
        pageSize,
        totalCount,
        handlePageChange,
        handleSearchChemicalElementClick,
        handleSearchTitleChange,
    };
};
