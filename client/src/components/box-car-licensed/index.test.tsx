import { screen } from "@testing-library/react";
import BoxCar from ".";
import { FakeCar } from "../../utils-test/car.utils";
import { setupComponent } from "../../utils-test/test.utils";


describe('Testing BoxCarLicensed', () => {
    it('Expect to render component with OK', () => {
        setupComponent(<BoxCar {...FakeCar} />)
    })

    it('Expect to show make inside box', () => {
        setupComponent(<BoxCar {...FakeCar} />)
        screen.getByText(/test/i)
    })

    it('Expect to show model inside box', () => {
        setupComponent(<BoxCar {...FakeCar} />)
        screen.getByText(/kamil/i)
    })

    it('Expect to show price inside box', () => {
        setupComponent(<BoxCar {...FakeCar} />)
        screen.getByText(/5000/i)
    })

    it('Expect to make box available for licensed = true', () => {
        setupComponent(<BoxCar {...FakeCar} />)
        expect(screen.getByTestId('BoxCar')).toHaveStyle(`background: rgb(47, 59, 82)`)
    })
})

export default {};