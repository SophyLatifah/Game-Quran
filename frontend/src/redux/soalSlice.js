import { createSlice } from "@reduxjs/toolkit";

// Slice = tempat simpan data + aturan CRUD
const soalSlice = createSlice({
  name: "soal",
  initialState: {
    data: [], // awalnya kosong
  },
  reducers: {
    addSoal: (state, action) => {
      state.data.push({ id: Date.now(), text: action.payload });
    },
    deleteSoal: (state, action) => {
      state.data = state.data.filter((s) => s.id !== action.payload);
    },
  },
});

// export action dan reducer
export const { addSoal, deleteSoal } = soalSlice.actions;
export default soalSlice.reducer;
