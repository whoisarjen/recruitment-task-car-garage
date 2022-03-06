import styled from "styled-components";
import BoxCar from "../components/box-car";
import useCars from "../hooks/useCars";
import { CarProps } from "../interfaces/car.interface";

const Grid = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 10px auto;
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`

const Home = () => {
    const cars = useCars()

    return (
        <Grid>
            {
                cars.length > 0 &&
                cars.map((car: CarProps) =>
                    <BoxCar key={car.list_cars_vehicles_id} {...car} />
                )
            }
        </Grid>
    )
}

export default Home;