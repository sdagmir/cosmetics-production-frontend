import { useEffect, useState } from "react";
import { ChemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK } from "../../core/mock/chemicalElementList";
import { api } from "../../core/api";
import { useNavigate, useParams } from "react-router-dom";
import { Component } from "../../core/api/API";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { incrementComponentsInFormulation } from "../../core/store/slices/appSlice";

export const useChemicalElementPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [chemicalElement, setChemicalElement] = useState<Component | null>(null);
    const { isAuth } = useAppSelector((state) => state.user)

    const fetchChemicalElement = async () => {
        if (id) {
            try {
                const response = await api.component.componentRead(id);
                setChemicalElement(response.data);
            } catch {
                const chemicalElementMock = CHEMICAL_ELEMENT_LIST_MOCK.find(
                    (element) => element.id === Number(id)
                );
                setChemicalElement(chemicalElementMock || null);
            }
        }
    };

    const renderPrice = () => {
        if (chemicalElement) {
            return `${chemicalElement.price} ₽ за ${chemicalElement.volume} ${chemicalElement.unit}`;
        }
    };


    const handleAddToFormulation = async () => {
        if (!isAuth) {
            console.log("Пользователь не авторизован. Пожалуйста, выполните вход.");
            alert("Вы должны авторизоваться, чтобы добавить услугу в заявку.");
            navigate("/login");
            return;
        }

        try {
            const response = await api.component.componentAddCreate(id);
            if (response.data) {
                console.log("Компонент успешно добавлен в косметическое средство");
                dispatch(incrementComponentsInFormulation());
                //navigate(`/connection-requests/${response.data.id}`);
            }

        } catch(error) {
            console.error("Ошибка добавления химического элемента в состав косметического средства:", error);
          }
        };

        useEffect(() => {
            fetchChemicalElement();
        }, [id]);

        return {
            renderPrice,
            chemicalElement,
            handleAddToFormulation,
    };
};