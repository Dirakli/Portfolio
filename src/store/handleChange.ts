import { createSlice } from "@reduxjs/toolkit"

const handleChange = createSlice({
    name: "change",
    initialState: {
        value: false,
        burgerValue: false,
    },
    reducers: {
        updateFunction(state, action) {
            state.value = action.payload
        },
        BurgerbarFunction(state, action) {
            state.burgerValue = action.payload
        }
    }
})

export const {updateFunction, BurgerbarFunction} = handleChange.actions;
export default handleChange.reducer;