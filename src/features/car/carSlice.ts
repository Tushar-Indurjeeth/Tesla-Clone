import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CarState {
  cars: string[];
}

const initialState: CarState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state: RootState) => state.car.cars;

export default carSlice.reducer;
