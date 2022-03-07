import styled from "styled-components";
import BoxCarLicensed from "../../components/box-car-licensed";
import { useCarsProps } from "../../hooks/useCars";
import { CarProps } from "../../interfaces/car.interface";

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

const BaseCheckout = ({ cars }: { cars: useCarsProps }) => {
    return (
        <Grid>
            {
                cars.length > 0 &&
                cars.map((car: CarProps) =>
                    <BoxCarLicensed key={car.list_cars_vehicles_id} {...car} />
                )
            }
        </Grid>
    )
}

export default BaseCheckout;