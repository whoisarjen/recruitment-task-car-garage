import styled from 'styled-components';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DialogCar from '../dialog-car';
import IconButton from '@mui/material/IconButton';
import useCheckout from '../../hooks/useCheckout';
import { CheckoutAnyProps } from '../../interfaces/checkout.interface';

const Box = styled.div`
    width: 100%;
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

const BoxCarCheckout = ({ car }: { car: CheckoutAnyProps }) => {
    const { deleteObject } = useCheckout()
    const { list_cars_vehicles_make, list_cars_vehicles_model, list_cars_vehicles_price } = car;

    const remove = (e: any) => {
        e.stopPropagation()
        deleteObject(car)
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
                <Center onClick={remove}>
                    <IconButton aria-label="remove from checkout" color="error">
                        <RemoveShoppingCartIcon />
                    </IconButton>
                </Center>
            </Box>
        </DialogCar>
    )
}

export default BoxCarCheckout;