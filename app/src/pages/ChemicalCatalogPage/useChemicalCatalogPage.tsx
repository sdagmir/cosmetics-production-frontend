import { useEffect, useState } from "react";
import { ChangeEvent } from "../../App.typing";
import { chemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK} from "../../core/mock/chemicalElementList.ts";
import { IChemicalElement } from "../../core/api/service/typing";
import { getChemicalElementList } from "../../core/api/service/index.ts";

export const useChemicalCatalogPage = () => {
    const [chemicalElementList, setChemicalElementList] = useState<IChemicalElement[]>([])
    const [formulationId, setFormulationId] = useState<number>(0);
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    const [searchChemicalElementTitle, setSearchChemicalElementTitle] = useState("");

    const fetchChemicalElements = (title?: string) => {
        getChemicalElementList(title)
        .then((data) => {
            setChemicalElementList(data.elements);
            setFormulationId(data.formulation_id);
            setItemsInCart(data.count)
        })
        .catch(() => {
            let filteredChemicalElement = CHEMICAL_ELEMENT_LIST_MOCK;
            if (title && title !== undefined) {
                filteredChemicalElement = filteredChemicalElement.filter((chemicalElement: IChemicalElement) =>
                    chemicalElement.title.toLowerCase().includes(title.toLowerCase())
                );
            }
            setChemicalElementList(filteredChemicalElement);
            setFormulationId(0);
            setItemsInCart(0);
        });
    };

    const handleSearchChemicalElementClick = () => {
        fetchChemicalElements(searchChemicalElementTitle);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        setSearchChemicalElementTitle(e.target.value);
    };

    useEffect(() => {
        fetchChemicalElements();
    }, []);

    return {
        chemicalElementList,
        formulationId,
        itemsInCart,
        handleSearchChemicalElementClick,
        handleSearchTitleChange,
    };
};