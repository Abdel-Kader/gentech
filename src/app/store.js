import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import societeReducer from "../features/societeSlice";
import { societeApi } from "../services/societeApi";

export default configureStore({
	reducer: {
		societe: societeReducer,
		[societeApi.reducerPath]: societeApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(societeApi.middleware);
	},
});
