import { sendRequest } from "../index.ts";
import { IChemicalElement, IGetChemicalElementListResponse } from "./typing"


export const getChemicalElementList = async (searchTitle?: string) => {
    try {
        const params: {[key: string]: any} = {};
        if (searchTitle !== undefined) params.title = searchTitle;

        const response: IGetChemicalElementListResponse = await sendRequest({
            method: "GET",
            path: "/component",
            params,
        });
        return response;
    } catch (error) {
        console.error("Error fetching chemical elements list:", error);
        throw error;
    }
};

export const getChemicalElementById = async (id: string) => {
    try {
        const response: IChemicalElement = await sendRequest({
            method: "GET",
            path: `/component/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching chemical element by id:", error);
        throw error;
    }
};