import { CarProps } from "../interfaces/car.interface"
import { addToCheckout, deleteFromCheckout } from "../redux/slices/checkout.slice"
import { useAppDispatch } from "./useRedux"

const useCheckout = () => {
    const dispatch = useAppDispatch()

    const addObject = (car: CarProps) => {
        dispatch(addToCheckout(car))
    }

    const deleteObject = async (car: CarProps) => {
        dispatch(deleteFromCheckout(car))
    }

    return { addObject, deleteObject }
}

export default useCheckout;