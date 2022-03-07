import { createSlice } from "@reduxjs/toolkit";
import { CarProps } from "../../interfaces/car.interface";

interface InitialStateProps {
    checkout: CarProps[]
}

const initialState: InitialStateProps = {
    checkout: [],
};

export const checkoutSlicer = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckout: (state: any, action: any) => {
            state.checkout.push(action.payload)
        },
    }
});

export const { addToCheckout } = checkoutSlicer.actions;

export default checkoutSlicer.reducer;