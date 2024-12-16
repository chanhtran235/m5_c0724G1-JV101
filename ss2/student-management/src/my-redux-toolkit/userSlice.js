import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkLogin } from "../services/accountServcice";

// Tạo action bất đồng bộ để login
export const login = createAsyncThunk('user/login', async (loginInfo) => {
    const account = await checkLogin(loginInfo);
    return account;  // Trả về dữ liệu khi thành công
});

// Tạo slice cho user
const userSlice = createSlice({
    name: 'user',
    initialState: {
        account: null,
        status: 'idle',  // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.account = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.account = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Xuất các action creators và reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;