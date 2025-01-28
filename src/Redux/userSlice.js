import { createSlice } from "@reduxjs/toolkit";

// Initial state for users
const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
    setFinishedLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setUsers, setLoading, setError, setFinishedLoading } =
  userSlice.actions;

export default userSlice.reducer;
