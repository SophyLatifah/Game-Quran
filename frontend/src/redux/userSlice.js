import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, // { username: "Ali", role: "admin" }
    users: [], // daftar user lokal (sementara, nanti bisa diganti backend)
  },
  reducers: {
    register: (state, action) => {
      const { username, password, role } = action.payload;
      // cek kalau username sudah ada
      const exists = state.users.find((u) => u.username === username);
      if (!exists) {
        state.users.push({ username, password, role });
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = { username: user.username, role: user.role };
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
