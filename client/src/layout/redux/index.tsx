import { useEffect } from "react";
import useCars from "../../hooks/useCars";
import useCheckout from "../../hooks/useCheckout";
import { useAppDispatch } from "../../hooks/useRedux";
import { addArrayToCars } from "../../redux/slices/car.slice";
import { addArrayToCheckout } from "../../redux/slices/checkout.slice";

const Redux = ({ children }: { children: any }) => {
    const { getAllCarsFromDB } = useCars()
    const { getAllCheckouts } = useCheckout()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const res = await Promise.all([await getAllCarsFromDB(), await getAllCheckouts()])
            dispatch(addArrayToCars(res[0]))
            dispatch(addArrayToCheckout(res[1]))
        })()
    })

    return <>{children}</>
}

export default Redux;