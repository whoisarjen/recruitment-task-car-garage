import { useEffect, useState } from "react"
import useAxios from "./useAxios"

const useCars = () => {
    const [cars, setCars] = useState([])
    const { get } = useAxios()

    useEffect(() => {
        (async () => {
            const res = await get({ url: '/' })
            setCars(res.data || [])
        })()
    }, [])

    return cars;
}

export default useCars;