import { CarProps } from "../interfaces/car.interface"
import { CheckoutAnyProps } from "../interfaces/checkout.interface"
import { addToCheckout, deleteFromCheckout } from "../redux/slices/checkout.slice"
import useAxios from "./useAxios"
import { useAppDispatch } from "./useRedux"

const useCheckout = () => {
    const { post, get } = useAxios()
    const dispatch = useAppDispatch()

    const addObject = async (object: CarProps) => {
        const res = await post({ url: '/checkout/add', object })
        dispatch(addToCheckout({ ...object, ...res.data }))
    }

    const deleteObject = async (car: CheckoutAnyProps) => {
        // dispatch(deleteFromCheckout(car))
    }

    const getAllCheckouts = async () => {
        const res = await get({ url: '/checkout' })
        return res.data
    }

    return { addObject, deleteObject, getAllCheckouts }
}

export default useCheckout;