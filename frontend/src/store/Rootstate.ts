// Rootstate.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../store/slices/auth/Authslice'; 

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
