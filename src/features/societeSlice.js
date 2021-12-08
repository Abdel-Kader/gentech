import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	nom: "société1",
	type: "Type 1",
};

const societeSlice = createSlice({
	name: "societe",
	initialState,
	reducers: {
		// ajouter une société
		add(state, action) {
			state.nom = action.payload;
		},
	},
});

export const { add } = societeSlice.actions;
export default societeSlice.reducer;
