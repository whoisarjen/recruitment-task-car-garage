import { useMemo } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { CarProps } from "../../interfaces/car.interface";

const useBoxBannerCheckout = () => {
    const cars = useAppSelector(state => state.checkout.checkout)

    const total = useMemo(() => {
        let money = 0;
        if (cars.length) {
            cars.forEach((car: CarProps) => money += parseFloat(car.list_cars_vehicles_price.toString()))
        }
        return money.toFixed(2)
    }, [cars])

    return { total }
}

export type useBoxBannerCheckoutProps = ReturnType<typeof useBoxBannerCheckout>

export default useBoxBannerCheckout;