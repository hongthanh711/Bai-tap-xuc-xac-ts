import {
  AnyAction,
  AsyncThunk,
  AsyncThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer';
import { xucXacReducer } from './reducers/xucXacReducer';

const rootReducer = combineReducers({
  xucXacReducer,
  movieReducer,
});

export const store = configureStore({
  reducer: persistReducer(
    { key: 'root', storage: storage, whitelist: ['xucXacReducer'] },
    rootReducer
  ),
  devTools: true,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store['getState']>;

export type AppDispatch = typeof store['dispatch'] &
  ThunkDispatch<RootState, any, AnyAction>;
