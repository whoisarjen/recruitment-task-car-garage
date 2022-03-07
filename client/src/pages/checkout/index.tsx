import { useAppSelector } from "../../hooks/useRedux";
import BaseCheckout from "./Checkout";

const Checkout = () => {
    const cars = useAppSelector(state => state.checkout.checkout)

    return <BaseCheckout {...{ cars }} />
}

export default Checkout;