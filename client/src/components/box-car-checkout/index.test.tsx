import { render, screen } from "@testing-library/react";
import BoxCarCheckout from ".";
import { FakeCar } from "../../utils-test/car.utils";


describe('Testing BoxCarCheckout', () => {
    it('Expect to render component with OK', () => {
        render(<BoxCarCheckout removeCar={jest.fn()} {...{ car: FakeCar }} />)
    })

    it('Expect to show make inside box', () => {
        render(<BoxCarCheckout removeCar={jest.fn()} {...{ car: FakeCar }} />)
        screen.getByText(/test/i)
    })

    it('Expect to show model inside box', () => {
        render(<BoxCarCheckout removeCar={jest.fn()} {...{ car: FakeCar }} />)
        screen.getByText(/kamil/i)
    })

    it('Expect to show price inside box', () => {
        render(<BoxCarCheckout removeCar={jest.fn()} {...{ car: FakeCar }} />)
        screen.getByText(/5000/i)
    })

    it('Expect to make box available for licensed = true', () => {
        render(<BoxCarCheckout removeCar={jest.fn()} {...{ car: FakeCar }} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(47, 59, 82)`)
    })

    it.todo('check delete button')
})

export default {};