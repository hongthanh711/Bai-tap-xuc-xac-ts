import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../interfaces/movie';
import { fetchMovieListApi } from '../../services/movie';

export const fetchMovieListAction = createAsyncThunk(
  'movie/fetchMovieList',
  async () => {
    const response = await fetchMovieListApi();

    return response.data.content;
  }
);

interface MovieState {
  movieList: Movie[];
}

const INITIAL_STATE: MovieState = {
  movieList: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovieListAction.fulfilled,
      (state: MovieState, action: PayloadAction<Movie[]>) => {
        console.log('fulfilleed');
        state.movieList = action.payload;
      }
    );

    builder.addCase(fetchMovieListAction.pending, () => {
      console.log('pending');
    });

    builder.addCase(fetchMovieListAction.rejected, () => {
      console.log('rejected');
    });
  },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
