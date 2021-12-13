import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

interface Categories {
    id: number,
    name: string,
    icon: string,
}

// Define a type for the slice state
interface CategoriesState {
    value: Categories[]
}

// Define the initial state using that type
const initialState: CategoriesState = {
    value: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: state => {
            // state.value += 1
        },
        decrement: state => {
            // state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setCategories: (state, action: PayloadAction<Categories[]>) => {
            state.value = action.payload
        }
    }
})

export const {increment, decrement, setCategories} = categoriesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const categories = (state: RootState) => state.categories.value

export default categoriesSlice.reducer