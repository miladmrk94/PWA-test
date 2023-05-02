import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from './features/sliderValueSlice'


export const store = configureStore({
    reducer: {
        mySlider: sliderSlice,
    },
})