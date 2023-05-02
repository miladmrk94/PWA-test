import { createSlice } from '@reduxjs/toolkit'


export const sliderSlice = createSlice({
    name: 'mySlider',
    initialState: {
        value: 0,
    },
    reducers: {
        sliderValue: (state, action) => {
            console.log("action.payload", action.payload);
            state.value = action.payload
        },

    },
})

export const { sliderValue } = sliderSlice.actions
export default sliderSlice.reducer