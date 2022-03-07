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

    it.todo('show right type of box')
})

export default {};