import { useMemo } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/useRedux'
import { CarProps } from '../../interfaces/car.interface'

const Box = styled.div`
    width: 100%;
    min-height: 100px;
    background #ddd;
    display: grid;
    grid-template-columns: 1fr;
`

const H1 = styled.h1`
    margin: auto;
    text-align: center;
`

const BoxBannerCheckout = () => {
    const cars = useAppSelector(state => state.checkout.checkout)

    const total = useMemo(() => {
        let money = 0;
        if (cars.length) {
            cars.forEach((car: CarProps) => money += parseFloat(car.list_cars_vehicles_price.toString()))
        }
        return money.toFixed(2)
    }, [cars])

    return (
        <Box>
            <H1>TOTAL: {total}$</H1>
        </Box>
    )
}

export default BoxBannerCheckout;