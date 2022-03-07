import styled from "styled-components";
import BoxCarLicensed from "../../components/box-car-licensed";
import BoxCarUnlicensed from "../../components/box-car-unlicensed";
import { CarProps } from "../../interfaces/car.interface";
import { isBoolean } from "../../utils/convert.utils";

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

const BaseHome = ({ cars }: { cars: CarProps[] }) => {
    return (
        <Grid>
            {
                cars.length > 0 &&
                cars.map((car: CarProps) =>
                    isBoolean(car.list_cars_vehicles_licensed)
                        ?
                        <BoxCarLicensed key={car.list_cars_vehicles_id} {...car} />
                        :
                        <BoxCarUnlicensed key={car.list_cars_vehicles_id} {...car} />
                )
            }
        </Grid>
    )
}

export default BaseHome;