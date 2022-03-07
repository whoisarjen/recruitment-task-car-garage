import styled from "styled-components";
import BoxBannerCheckout from "../../components/box-banner-checkout";
import BoxCarCheckout from "../../components/box-car-checkout";
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
        <>
            <BoxBannerCheckout />
            <Grid>
                {
                    cars.length > 0 &&
                    cars.map((car: CarProps, index: number) =>
                        <BoxCarCheckout key={car.list_cars_vehicles_id + index} car={car} />
                    )
                }
            </Grid>
        </>
    )
}

export default BaseCheckout;