import { combineReducers } from "redux";
import dataSlices from "../slices/dataSlices";
import uiSlice from "../slices/uiSlice";

const rootReducer = combineReducers({ data: dataSlices, ui: uiSlice });
export default rootReducer;
