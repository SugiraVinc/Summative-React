import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const bookInfo = localStorage.getItem('bookInfo');
const parsedBookInfo = bookInfo ? JSON.parse(bookInfo) : [];

const initialState = {
 bookInfo: Array.isArray(parsedBookInfo) ? parsedBookInfo : []
};

const bookSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setBookInfo(state, action: PayloadAction<any[]>) {
      state.bookInfo = action.payload;
      localStorage.setItem('bookInfo', JSON.stringify(action.payload));
    }
  }
});

export const { setBookInfo } = bookSlice.actions;
export default bookSlice.reducer;