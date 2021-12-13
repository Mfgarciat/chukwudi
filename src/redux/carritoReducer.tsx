import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

interface Carrito {
    id: string,
    cantidad: any,
}

// Define a type for the slice state
interface CarritoState {
    value: Carrito []
}

// Define the initial state using that type
const initialState: CarritoState = {
    value: []

}

export const carritoSlice = createSlice({
    name: 'carrito',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        /// Use the PayloadAction type to declare the contents of `action.payload`
        addCarrito: (state, action: PayloadAction<string>) => {

            let array = state.value;
            if (array.length > 0 && array.filter(x => x.id === action.payload).length > 0) {
                let cantidad: number;
                for (let i = 0; i < array.length; i++) {
                    // @ts-ignore
                    cantidad = array[i].cantidad;
                    // @ts-ignore
                    if (array[i].id === action.payload) {
                        // @ts-ignore
                        array[i].cantidad = cantidad + 1;
                    }
                }
                state.value = array;

            } else {
                state.value.push({'id': action.payload, 'cantidad': 1})
            }
        }
    }
})

export const {addCarrito} = carritoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const carrito = (state: RootState) => state.carrito.value

export default carritoSlice.reducer