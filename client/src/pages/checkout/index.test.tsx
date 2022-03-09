import { screen } from "@testing-library/react";
import { FakeCar } from "../../utils-test/car.utils";
import { setupComponent } from "../../utils-test/test.utils";
import BaseCheckout from "./Checkout";

describe('Testing Checkout', () => {
    it('Expect to show car in box', () => {
        setupComponent(<BaseCheckout checkouts={[{...FakeCar, id: 123}]} />)

        screen.findByText(FakeCar.list_cars_vehicles_price)
        screen.findByText(FakeCar.list_cars_vehicles_make)
        screen.findByText(FakeCar.list_cars_vehicles_model)
    })
})

export default {};