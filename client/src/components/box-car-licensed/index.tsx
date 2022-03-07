import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { CarProps } from '../../interfaces/car.interface';
import DialogCar from '../dialog-car';
import IconButton from '@mui/material/IconButton';

const Box = styled.div`
    width: calc(100% - 20px);
    background: #2f3b52;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    display: grid;
    grid-template-columns: 44px auto 44px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out;
    min-height: 88px;
`

const Content = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`

const Center = styled.div`
    width: 100%;
    height: 100;
    margin: auto;
    text-align: center;
`

const BoxCarLicensed = (car: CarProps) => {
    const { list_cars_vehicles_make, list_cars_vehicles_model, list_cars_vehicles_price } = car;

    const addToCheckout = (e: any) => {
        e.stopPropagation()

    }

    return (
        <DialogCar {...{ car }}>
            <Box data-testid="BoxCar">
                <Center>
                    <DirectionsCarIcon />
                </Center>
                <Content>
                    <div>{list_cars_vehicles_make} {list_cars_vehicles_model}</div>
                    <div>{list_cars_vehicles_price}$</div>
                </Content>
                <Center onClick={addToCheckout}>
                    <IconButton aria-label="add to checkout" color="error">
                        <ShoppingCartIcon />
                    </IconButton>
                </Center>
            </Box>
        </DialogCar>
    )
}

export default BoxCarLicensed;