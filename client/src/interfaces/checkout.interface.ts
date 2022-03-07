import { CarProps } from "./car.interface"

export interface CheckoutProps {
    id: number
    car_list_cars_vehicles_id: number
}

export type CheckoutAnyProps = CheckoutProps & CarProps