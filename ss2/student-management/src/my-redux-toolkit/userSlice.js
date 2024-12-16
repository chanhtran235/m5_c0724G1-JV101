import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkLogin } from "../services/accountServcice";

// Tạo action bất đồng bộ để login
export const login = createAsyncThunk('user/login', async (loginInfo,{ rejectWithValue }) => {
    try {
        const account = await checkLogin(loginInfo);
        if (account) {
            return account; // Trả về account khi login thành công
        } else {
            // Trả về thông báo lỗi khi login không thành công
            return rejectWithValue('Đăng nhập thất bại: Thông tin tài khoản không đúng.');
        }
    } catch (error) {
        return rejectWithValue(error.message); // Trả về lỗi nếu có exception
    }
    // const account = await checkLogin(loginInfo);
    // return account;  // Trả về dữ liệu khi thành công (đây là giá trị làm payload)
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