import { createSlice } from "@reduxjs/toolkit"

const handleChange = createSlice({
    name: "change",
    initialState: {
        value: false
    },
    reducers: {
        updateFunction(state, action) {
            state.value = action.payload
        }
    }
})

export const {updateFunction} = handleChange.actions;
export default handleChange.reducer;