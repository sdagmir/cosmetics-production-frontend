import { useEffect, useState} from "react";
import { ChangeEvent } from "../../App.typing";
import { useAppSelector, useAppDispatch } from '../../core/store/hooks.ts';
import { setSearchTitle, fetchChemicalElements } from '../../core/store/slices/appSlice';

export const useChemicalCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { searchTitle, chemicalElementList, isActive, itemsInCart, formulationId } = useAppSelector((state) => state.app);
    const [searchTrigger, setSearchTrigger] = useState(false);


    const handleSearchChemicalElementClick = () => {
        dispatch(fetchChemicalElements({ title: searchTitle }));
        setSearchTrigger((prev) => !prev);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        dispatch(setSearchTitle(e.target.value));
    };

    useEffect(() => {
        dispatch(fetchChemicalElements({ title: searchTitle }));
    }, [dispatch, searchTrigger]);

    return {
        chemicalElementList,
        formulationId,
        itemsInCart,
        searchTitle,
        isActive,
        handleSearchChemicalElementClick,
        handleSearchTitleChange,
    };
};