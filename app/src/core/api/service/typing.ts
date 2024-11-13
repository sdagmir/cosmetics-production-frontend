export interface IChemicalElement {
    id: number;
    title: string;
    img_path: string;
    volume: number;
    unit: string;
    price: string;
    short_description: string;
    description: string;
}

export interface IGetChemicalElementListResponse {
    elements: IChemicalElement[];
    formulation_id: number;
    count: number;
}

export interface IChemicalElementInFormulation {
    pk: number;
    title: string;
    img_path: string;
    volume: number;
    unit: string;
    price: string;
    dosage: number;
}

export interface ICreateFormulationByIdResponse {
    pk: number;
    status: number;
    user: string;
    date_created: string;
    name: string;
    date_formation: string;
    date_completion: string;
    manager: number;
    components: IChemicalElementInFormulation[];
}