import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api';

interface FormulationState {
    formulationName: string;
    error: string | null;
}

const initialState: FormulationState = {
    formulationName: '',
    error: null,
};

export const submitFormulation = createAsyncThunk(
    'formulation/submitFormulation',
    async (
        { formulationId, name}: {formulationId: string, name: string}, { rejectWithValue }
    ) => {
        try {
            await api.cosmeticFormulations.cosmeticFormulationsPutUpdate(formulationId, {name});
            const response = await api.cosmeticFormulations.cosmeticFormulationsFormUpdate(formulationId);
            if (response.status === 200) {
                return formulationId;
            } else {
                return rejectWithValue('Ошибка при формировании косметического средства.');
            }
        } catch {
            return rejectWithValue('Ошибка при формировании косметического средства.');
        }
    }
);

export const deleteFormulation = createAsyncThunk(
    'formulation/deleteFormulation',
    async ( formulationId: string, { rejectWithValue }) => {
        try {
            const response = await api.cosmeticFormulations.cosmeticFormulationsDeleteDelete(formulationId);
            if (response.status === 200) {
                return formulationId;
            } else {
                return rejectWithValue('Ошибка при удалении косметического средства.');
            }
        } catch {
            return rejectWithValue('Ошибка при удалении косметического средства.');
        }
    }
);


const formulationSlice = createSlice({
    name: 'formulation',
    initialState,
    reducers: {
        updateFormulationName: (state, action: PayloadAction<string>) => {
            state.formulationName = action.payload;
        },
        clearFormulation: (state) => {
            state.formulationName = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitFormulation.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(deleteFormulation.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export const { updateFormulationName, clearFormulation } = formulationSlice.actions;

export default formulationSlice.reducer;