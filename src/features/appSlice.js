import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarVisible: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    closeSidebar: (state) => {
      state.isSidebarVisible = false;
    },
    openSidebar: (state) => {
      state.isSidebarVisible = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } = appSlice.actions;
export default appSlice.reducer;
