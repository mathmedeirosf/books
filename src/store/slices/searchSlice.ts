import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../../types/types';

const initialState: SearchState = {
    title: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
});

export const { searchTitle } = searchSlice.actions;
export default searchSlice.reducer;