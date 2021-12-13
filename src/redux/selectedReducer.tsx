import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

// Define a type for the slice state
interface SelectedState {
    value: string
}

// Define the initial state using that type
const initialState: SelectedState = {
    value: "1"
}

export const selectedSlice = createSlice({
    name: 'selected',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        /// Use the PayloadAction type to declare the contents of `action.payload`
        change: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {change} = selectedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selected = (state: RootState) => state.selected.value

export default selectedSlice.reducer