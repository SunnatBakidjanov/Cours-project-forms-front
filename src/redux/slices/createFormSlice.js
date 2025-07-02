import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: null,
	isDataSaving: false,
};

const formSlice = createSlice({
	name: 'createFrom',
	initialState,
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setDataSaveText: (state, action) => {
			state.isDataSaving = action.payload;
		},
	},
});

export const { setTitle, setDataSaveText } = formSlice.actions;
export default formSlice.reducer;
