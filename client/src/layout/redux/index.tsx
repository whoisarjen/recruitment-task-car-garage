import { useEffect } from "react";
import useCars from "../../hooks/useCars";
import useCheckout from "../../hooks/useCheckout";
import { useAppDispatch } from "../../hooks/useRedux";
import { CheckoutAnyProps } from "../../interfaces/checkout.interface";
import { addArrayToCars } from "../../redux/slices/car.slice";
import { addArrayToCheckout } from "../../redux/slices/checkout.slice";

const Redux = ({ children }: { children: any }) => {
    const { getAllCarsFromDB } = useCars()
    const { getAllCheckouts } = useCheckout()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const cars = await getAllCarsFromDB()
            dispatch(addArrayToCars(cars))
            const checkouts: CheckoutAnyProps[] = await getAllCheckouts()
            dispatch(addArrayToCheckout(checkouts))
        })()
    })

    return <>{children}</>
}

export default Redux;