import {configureStore} from '@reduxjs/toolkit'
import categoriesSlice from './categoriesReducer'
import selectedSlice from "./selectedReducer";
import productsSlice from "./productsReducers";
import carritoSlice from "./carritoReducer";
import personasSlice from "./personasReducer";

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        selected: selectedSlice,
        carrito: carritoSlice,
        personas: personasSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;