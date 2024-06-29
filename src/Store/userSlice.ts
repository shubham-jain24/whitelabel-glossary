import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserDetails } from './UserDetails';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: {
            userId: '',
            userName: '',
            age: ''
        } as UserDetails,
    },
    reducers: {
        updateUserDetails: (state, action: PayloadAction<UserDetails> ) => {
            state.userDetails = action.payload
        },
    }
})

export const { updateUserDetails } = userSlice.actions
export default userSlice.reducer;