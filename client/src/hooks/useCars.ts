import { useEffect, useState } from "react"
import { CarProps } from "../interfaces/car.interface"
import useAxios from "./useAxios"

const useCars = () => {
    const [cars, setCars] = useState<CarProps[]>([])
    const { get } = useAxios()

    useEffect(() => {
        (async () => {
            const res = await get({ url: '/' })
            setCars(res.data || [])
        })()
    }, [])

    return cars;
}

export type useCarsProps = ReturnType<typeof useCars>

export default useCars;