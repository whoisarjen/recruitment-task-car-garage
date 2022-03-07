import { render, screen } from "@testing-library/react";
import BoxCar from ".";
import { FakeCar } from "../../utils-test/car.utils";


describe('Testing BoxCar', () => {
    it('Expect to render component with OK', () => {
        render(<BoxCar {...FakeCar} />)
    })

    it('Expect to show make inside box', () => {
        render(<BoxCar {...FakeCar} />)
        screen.getByText(/test/i)
    })

    it('Expect to show model inside box', () => {
        render(<BoxCar {...FakeCar} />)
        screen.getByText(/kamil/i)
    })

    it('Expect to show price inside box', () => {
        render(<BoxCar {...FakeCar} />)
        screen.getByText(/5000/i)
    })

    it('Expect to make box blocked for licensed = false', () => {
        render(<BoxCar {...{ ...FakeCar, list_cars_vehicles_licensed: false }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(158, 158, 158)`)
    })
})

export default {};