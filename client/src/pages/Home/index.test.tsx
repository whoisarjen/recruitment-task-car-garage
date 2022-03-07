import { render, screen } from "@testing-library/react";
import Home from ".";
import { FakeCar } from "../../utils-test/car.utils";
import BaseHome from "./Home";

describe('Testing home page', () => {
    it('Expect to render component with OK', () => {
        render(<Home />)
    })
})

describe('Testing home component', () => {
    it('Expect to render component with OK', () => {
        render(<BaseHome {...{ cars: [FakeCar] }} />)
    })

    it('Expect to have BoxCar with "test" text', () => {
        render(<BaseHome {...{ cars: [FakeCar] }} />)
        screen.getByText(/test/i)
    })

    it('Expect to make box available for licensed = true', () => {
        render(<BaseHome {...{ cars: [FakeCar] }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(47, 59, 82)`)
    })

    it('Expect to make box available for licensed = true', () => {
        render(<BaseHome {...{ cars: [{...FakeCar, list_cars_vehicles_licensed: false}] }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(158, 158, 158)`)
    })
})

export default {};