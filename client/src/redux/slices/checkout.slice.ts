import { createSlice } from "@reduxjs/toolkit";
import { CheckoutAnyProps } from "../../interfaces/checkout.interface";

interface InitialStateProps {
    checkout: CheckoutAnyProps[]
}

const initialState: InitialStateProps = {
    checkout: [],
};

export const checkoutSlicer = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckout: (state: any, action: { payload: CheckoutAnyProps }) => {
            state.checkout.push(action.payload)
        },
        addArrayToCheckout: (state: any, action: { payload: CheckoutAnyProps[] }) => {
            state.checkout = [...state.checkout, ...action.payload];
        },
        deleteFromCheckout: (state: any, action: { payload: CheckoutAnyProps }) => {
            state.checkout = state.checkout.filter((x: CheckoutAnyProps) => x.id != action.payload.id);
        }
    }
});

export const { addToCheckout, addArrayToCheckout, deleteFromCheckout } = checkoutSlicer.actions;

export default checkoutSlicer.reducer;