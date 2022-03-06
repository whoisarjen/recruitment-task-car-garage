import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const Home = () => {
    const [cars, setCars] = useState([])
    const { get } = useAxios()

    useEffect(() => {
        (async () => {
            const res = await get({ url: '/' })
            // setCars(res || [])
            console.log(res)
        })()
    }, [])

    return <></>
}

export default Home;