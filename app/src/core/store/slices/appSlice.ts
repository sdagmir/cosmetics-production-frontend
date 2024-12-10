import { createSlice, PayloadAction, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { api } from "../../api"; 
import { Component } from "../../api/API"; 
import { ChemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK} from "../../mock/chemicalElementList";

interface ChemicalCatalogState {
    searchTitle: string;
    chemicalElementList: Component[];
    filterFormulationStatus?: string;
    filterFormulationStartDate?: string;
    filterFormulationEndDate?: string;
    formulationId: number | null;
    itemsInCart: number;
    isActive: boolean;
}

const initialState: ChemicalCatalogState = {
    searchTitle: '',
    chemicalElementList: [],
    filterFormulationStatus: undefined,
    filterFormulationStartDate: undefined,
    filterFormulationEndDate: undefined,
    formulationId: null,
    itemsInCart: 0,
    isActive: false
};

export const fetchChemicalElements = createAsyncThunk(
    "chemicalElements/fetchChemicalElements",
    async (
        { title }: { title?: string }, { rejectWithValue }
    ) => {
        try {
            const response = await api.component.componentList({title});
            return response.data;
        } catch {
            return rejectWithValue({title});
        }
    }
    
);

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        setSearchTitle: (state, action: PayloadAction<string>) => {
            state.searchTitle = action.payload;
        },
        setFilterFormulationStatus: (state, action: PayloadAction<string>) =>{
            state.filterFormulationStatus = action.payload;
        },
        setFilterFormulationStartDate: (state, action: PayloadAction<string>) =>{
            state.filterFormulationStartDate = action.payload;
        },
        setFilterFormulationEndDate: (state, action: PayloadAction<string>) =>{
            state.filterFormulationEndDate = action.payload;
        },
        incrementComponentsInFormulation: (state) => {
            state.itemsInCart += 1;
        },
        decrementComponentsInFormulation: (state) => {
            state.itemsInCart = Math.max(0, state.itemsInCart - 1);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchChemicalElements.pending, (state) => {
            state.isActive = false;
          })
          .addCase(fetchChemicalElements.fulfilled, (state, action) => {
            state.chemicalElementList = action.payload.elements || [];
            state.formulationId = action.payload.formulation_id || null;
            state.itemsInCart = action.payload.count || 0;
            state.isActive = true;
          })
          .addCase(fetchChemicalElements.rejected, (state, action) => {
            const { title } = action.payload as { title?: string };
    
            state.chemicalElementList = CHEMICAL_ELEMENT_LIST_MOCK.filter((component) => {
              const matchesTitle = title
                ? component.title.toLowerCase().includes(title.toLowerCase())
                : true;
            
              return matchesTitle;
            });
    
            state.formulationId = null;
            state.itemsInCart = 0;
            state.isActive = true;
          });
    },
});

export const {
    setSearchTitle,
    setFilterFormulationStatus,
    setFilterFormulationStartDate,
    setFilterFormulationEndDate,
    incrementComponentsInFormulation,
    decrementComponentsInFormulation
} = appSlice.actions

export default appSlice.reducer;