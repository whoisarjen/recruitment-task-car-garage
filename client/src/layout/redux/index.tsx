import { useEffect } from "react";
import useCars from "../../hooks/useCars";
import useCheckout from "../../hooks/useCheckout";
import { useAppDispatch } from "../../hooks/useRedux";
import { CarProps } from "../../interfaces/car.interface";
import { CheckoutAnyProps, CheckoutProps } from "../../interfaces/checkout.interface";
import { addArrayToCars } from "../../redux/slices/car.slice";
import { addArrayToCheckout } from "../../redux/slices/checkout.slice";

const Redux = ({ children }: { children: any }) => {
    const { getAllCarsFromDB } = useCars()
    const { getAllCheckouts } = useCheckout()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const cars: CarProps[] = await getAllCarsFromDB()
            dispatch(addArrayToCars(cars))
            const checkouts: CheckoutProps[] = await getAllCheckouts()

            const checkoutConnected: CheckoutAnyProps[] = []
            if (checkouts.length) {
                for (let i = 0; i < checkouts.length; i++) {
                    for (let a = 0; a < cars.length; a++) {
                        if (checkouts[i].car_list_cars_vehicles_id == cars[a].list_cars_vehicles_id) {
                            checkoutConnected.push({
                                ...cars[a],
                                ...checkouts[i],
                            })
                            break;
                        }
                    }
                }
            }
            dispatch(addArrayToCheckout(checkoutConnected))
        })()
    })

    return <>{children}</>
}

export default Redux;