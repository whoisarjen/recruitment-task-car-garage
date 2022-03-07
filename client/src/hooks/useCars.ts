import useAxios from "./useAxios"

const useCars = () => {
    const { get } = useAxios()

    const getAllCarsFromDB = async () => {
        const res = await get({ url: '/' })
        return res.data
    }

    return { getAllCarsFromDB };
}

export type useCarsProps = ReturnType<typeof useCars>

export default useCars;