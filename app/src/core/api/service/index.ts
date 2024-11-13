import { sendRequest } from "../index.ts";
import { IGetChemicalElementListResponse } from "./typing"


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