import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api"; 
import { User } from "../../api/API"; 


interface UserState {
    username: string;
    email: string;
    isAuth: boolean;
    loading: string;
    error: string | null;
}

const initialState : UserState =  {
    username : "",
    email: "",
    isAuth: false,
    loading: "",
    error: null
}

export const registerUser = createAsyncThunk(
  "user/register", 
  async (userData: User, { rejectWithValue }) => {
    try {
      const response = await api.user.userCreateCreate(userData); 

      if (response.status === 201) {
        return {username: userData.username, email: userData.email}; 
      }
      else {
        return rejectWithValue('Ошибка регистрации. Попробуйте снова.');
      }
    } catch (err) {
        return rejectWithValue('Ошибка регистрации. Попробуйте снова.');
    }
  }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUsername: (state, action: PayloadAction<{ username: string; }>) => {
            state.username = action.payload.username;
          }
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.username = String(action.payload.username);
          state.email = String(action.payload.email);
          state.isAuth = true;
          state.loading = "succeeded";
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.error = action.payload as string;
          state.loading = "failed";
          console.error(action.payload);
        });
    },
  });

  export const { saveUsername } = userSlice.actions;

  export default userSlice.reducer;