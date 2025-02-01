import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BatmanState {
  currentSection: string;
  menuOpen: boolean;
  currentComicPage: number;
  currentComicId: string | null;
}

const initialState: BatmanState = {
  currentSection: 'home',
  menuOpen: false,
  currentComicPage: 0,
  currentComicId: null,
};

const batmanSlice = createSlice({
  name: 'batman',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setCurrentComicPage: (state, action: PayloadAction<number>) => {
      state.currentComicPage = action.payload;
    },
    setCurrentComicId: (state, action: PayloadAction<string | null>) => {
      state.currentComicId = action.payload;
      state.currentComicPage = 0;
    },
  },
});

export const { setCurrentSection, toggleMenu, setCurrentComicPage, setCurrentComicId } = batmanSlice.actions;
export default batmanSlice.reducer;