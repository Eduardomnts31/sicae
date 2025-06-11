import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
'auth': 'authslice'

});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;