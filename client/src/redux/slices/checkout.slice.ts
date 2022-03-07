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
        addToCheckout: (state: any, action: { payload: CarProps }) => {
            state.checkout.push(action.payload)
        },
        deleteFromCheckout: (state: any, action: { payload: CarProps }) => {
            // state.checkout = action.payload;
            console.log('code it')
        }
    }
});

export const { addToCheckout, deleteFromCheckout } = checkoutSlicer.actions;

export default checkoutSlicer.reducer;