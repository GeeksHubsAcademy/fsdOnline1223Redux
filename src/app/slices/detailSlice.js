
import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
      details: {}
    },
    reducers: {
      add_details: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    }
    
});

export const { add_details } = detailSlice.actions;

export const detailData = (state) => state.detail;

export default detailSlice.reducer;