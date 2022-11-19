const { createSlice } = require('@reduxjs/toolkit');


const cardSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        addCard(state, action) {
            state.push(action.payload)
        },
        removeCard(state, action) {
            return state.filter((card) => card.id !== action.payload);
        }
    }
})

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;