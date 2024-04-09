
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './rootReducer'
import { useDispatch } from "react-redux";

export const STORE = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type TRootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
