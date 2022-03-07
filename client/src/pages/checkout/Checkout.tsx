import styled from "styled-components";
import BoxCarCheckout from "../../components/box-car-checkout";
import { removeCarFromArrayByID } from "../../components/utils/car.utils";
import { useCarsProps } from "../../hooks/useCars";
import { useAppDispatch } from "../../hooks/useRedux";
import { CarProps } from "../../interfaces/car.interface";
import { deleteFromCheckout } from "../../redux/slices/checkout.slice";

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
    const dispatch = useAppDispatch()

    const removeCar = async (car: CarProps) => {
        dispatch(deleteFromCheckout(await removeCarFromArrayByID({ array: cars, id: car.list_cars_vehicles_id })))
    }

    return (
        <Grid>
            {
                cars.length > 0 &&
                cars.map((car: CarProps, index: number) =>
                    <BoxCarCheckout key={car.list_cars_vehicles_id + index} car={car} removeCar={removeCar} />
                )
            }
        </Grid>
    )
}

export default BaseCheckout;