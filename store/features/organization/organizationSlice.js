// store/organizationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const organizationSlice = createSlice({
  name: "organization",
  initialState: {
    organization: "null",
  },
  reducers: {
    setOrganization: (state, action) => {
      console.log("user dispatched correctly");

      state.organization = action.payload;
    },
  },
});

export const { setOrganization } = organizationSlice.actions;

export default organizationSlice.reducer;
