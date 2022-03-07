import { createSlice } from "@reduxjs/toolkit";
import { CarProps } from "../../interfaces/car.interface";

interface InitialStateProps {
    cars: CarProps[]
}

const initialState: InitialStateProps = {
    cars: [],
};

export const carSlicer = createSlice({
    name: "car",
    initialState,
    reducers: {
        addArrayToCars: (state: any, action: { payload: CarProps[] }) => {
            state.cars = [...state.cars, ...action.payload];
        },
    }
});

export const { addArrayToCars } = carSlicer.actions;

export default carSlicer.reducer;