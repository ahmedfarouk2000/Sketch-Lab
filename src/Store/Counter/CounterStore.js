import { createSlice, configureStore } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter',
    initialState: { DoubleClick: false },
    reducers: {
        DoubleClickToDelete: (state) => {
            state.DoubleClick = !state.DoubleClick
        },
        // SetMode: (state) =>{
        //     state.DoubleClick = !state.DoubleClick
        // }
        // decrement: (state) => {
        //     state.value -= 1
        // }
    }
})

export const CounterStore = configureStore({
    reducer: CounterSlice.reducer
})



export const { DoubleClickToDelete } = CounterSlice.actions