import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

interface Products {
    id: string,
    name: string,
    qualification: number,
    time: string,
    categorie: string,
    price: number,
    image: string,
}

// Define a type for the slice state
interface ProductsState {
    value: Products[]
}

// Define the initial state using that type
const initialState: ProductsState = {
    value: []
}

export const productsSlice = createSlice({
    name: 'products',
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
        setProducts: (state, action: PayloadAction<Products[]>) => {
            state.value = action.payload
        }
    }
})

export const {increment, decrement, setProducts} = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const products = (state: RootState) => state.products.value

export default productsSlice.reducer