import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: null,
	isDataSaving: false,
	isPublish: false,
	isLoading: false,
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
		setPulish: (state, action) => {
			state.isPublish = action.payload;
		},
		setLoader: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setTitle, setDataSaveText, setPulish, setLoader } = formSlice.actions;
export default formSlice.reducer;
