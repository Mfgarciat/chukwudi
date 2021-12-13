import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

// Define a type for the slice state
interface PersonasState {
    value: number
}

// Define the initial state using that type
const initialState: PersonasState = {
    value: 1
}

export const personasSlice = createSlice({
    name: 'personas',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        /// Use the PayloadAction type to declare the contents of `action.payload`
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<object[]>) => {
            // state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = personasSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const personas = (state: RootState) => state.personas.value

export default personasSlice.reducer