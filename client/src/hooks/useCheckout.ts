import { CarProps } from "../interfaces/car.interface"
import { addToCheckout, deleteFromCheckout } from "../redux/slices/checkout.slice"
import useAxios from "./useAxios"
import { useAppDispatch } from "./useRedux"

const useCheckout = () => {
    const { post } = useAxios()
    const dispatch = useAppDispatch()

    const addObject = async (car: CarProps) => {
        const res = await post({ url: '/checkout/add', object: car })
        dispatch(addToCheckout(car))
    }

    const deleteObject = async (car: CarProps) => {
        dispatch(deleteFromCheckout(car))
    }

    return { addObject, deleteObject }
}

export default useCheckout;