import { useAppSelector } from "../../hooks/useRedux";
import BaseCheckout from "./Checkout";

const Checkout = () => {
    const checkouts = useAppSelector(state => state.checkout.checkout)

    return <BaseCheckout {...{ checkouts }} />
}

export default Checkout;