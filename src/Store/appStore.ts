import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

// Main reducer can contain multiple reducers coming from different slices.
// Dividing the data into multiple slice so that we can avoid importing a complete big store a component we can do selective imports.
const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default appStore