import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1Data: { horse: "" },
  step2Data: { date: "", time: "", location: "" },
  step3Data: { name: "", email: "", phone: "" },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep1Data(state, action) {
      state.step1Data = action.payload;
    },
    setStep2Data(state, action) {
      state.step2Data = action.payload;
    },
    setStep3Data(state, action) {
      state.step3Data = action.payload;
    },
  },
});

export const { setStep1Data, setStep2Data, setStep3Data } = formSlice.actions;
export default formSlice.reducer;
