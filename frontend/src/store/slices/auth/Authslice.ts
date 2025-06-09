import { createSlice, type PayloadAction,  } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    user: null | {
        id: string;
        name: string;
        email: string;
        phone: string;
        program: number;
        generation: number;
        role: number;
    };
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;