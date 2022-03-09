import { screen } from "@testing-library/react";
import Home from ".";
import { FakeCar } from "../../utils-test/car.utils";
import { setupComponent } from "../../utils-test/test.utils";
import BaseHome from "./Home";

describe('Testing home page', () => {
    it('Expect to render component with OK', () => {
        setupComponent(<Home />)
    })
})

describe('Testing home component', () => {
    it('Expect to render component with OK', () => {
        setupComponent(<BaseHome {...{ cars: [FakeCar] }} />)
    })

    it('Expect to have BoxCar with "test" text', () => {
        setupComponent(<BaseHome {...{ cars: [FakeCar] }} />)
        screen.getByText(/test/i)
    })

    it('Expect to make box available for licensed = true', () => {
        setupComponent(<BaseHome {...{ cars: [FakeCar] }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(47, 59, 82)`)
    })

    it('Expect to make box available for licensed = true', () => {
        setupComponent(<BaseHome {...{ cars: [{ ...FakeCar, list_cars_vehicles_licensed: false }] }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(158, 158, 158)`)
    })
})

export default {};