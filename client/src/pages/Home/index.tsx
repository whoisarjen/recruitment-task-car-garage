import useCars from "../../hooks/useCars";
import BaseHome from "./Home";

const Home = () => {
    const cars = useCars()

    return <BaseHome {...{ cars }} />
}

export default Home;