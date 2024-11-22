import { useEffect, useState } from "react";
import { ChangeEvent } from "../../App.typing";
import { chemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK} from "../../core/mock/chemicalElementList.ts";
import { IChemicalElement } from "../../core/api/service/typing";
import { getChemicalElementList } from "../../core/api/service/index.ts";
import { useAppSelector, useAppDispatch } from '../../core/store/hooks.ts';
import { setSearchTerm } from '../../core/store/slices/searchSlice.ts';

export const useChemicalCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { searchTerm } = useAppSelector((state) => state.search);
    const [chemicalElementList, setChemicalElementList] = useState<IChemicalElement[]>([])
    const [formulationId, setFormulationId] = useState<number>(0);
    const [itemsInCart, setItemsInCart] = useState<number>(0);

    const fetchChemicalElements = (component_title?: string) => {
        getChemicalElementList(component_title)
        .then((data) => {
            setChemicalElementList(data.elements);
            setFormulationId(data.formulation_id);
            setItemsInCart(data.count)
        })
        .catch(() => {
            let filteredChemicalElement = CHEMICAL_ELEMENT_LIST_MOCK;
            if (component_title && component_title !== undefined) {
                filteredChemicalElement = filteredChemicalElement.filter((chemicalElement: IChemicalElement) =>
                    chemicalElement.title.toLowerCase().includes(component_title.toLowerCase())
                );
            }
            setChemicalElementList(filteredChemicalElement);
            setFormulationId(0);
            setItemsInCart(0);
        });
    };

    const handleSearchChemicalElementClick = () => {
        fetchChemicalElements(searchTerm);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        const newSearchTerm = e.target.value;
        console.log("Новое значение строки поиска:", newSearchTerm);
        dispatch(setSearchTerm(newSearchTerm));
    };

    useEffect(() => {
        fetchChemicalElements(searchTerm);
    }, []);

    return {
        chemicalElementList,
        formulationId,
        itemsInCart,
        searchTerm,
        handleSearchChemicalElementClick,
        handleSearchTitleChange,
    };
};