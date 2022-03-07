import { useAppSelector } from "../../hooks/useRedux";
import BaseHome from "./Home";

const Home = () => {
    const cars = useAppSelector(state => state.cars.cars)
    
    return <BaseHome {...{ cars }} />
}

export default Home;