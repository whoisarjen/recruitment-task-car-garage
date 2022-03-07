import { render, screen } from "@testing-library/react";
import DialogCar from ".";
import { FakeCar } from "../../utils-test/car.utils";
import userEvent from '@testing-library/user-event'
import { wait } from "@testing-library/user-event/dist/utils";

describe('Testing DialogCar', () => {
    it('Expect to open dialog by clicking children element', () => {
        render(<DialogCar {...{ car: FakeCar }}><button>Submit</button></DialogCar>)

        const button = screen.getByTestId('submit')

        userEvent.click(button)

        screen.getByTestId('dialog')
    })

    it('Expect to clsoe dialog', async () => {
        render(<DialogCar {...{ car: FakeCar }}><button>Submit</button></DialogCar>)

        const button = screen.getByTestId('submit')

        userEvent.click(button)

        screen.getByTestId('dialog')

        const close = screen.getByTestId('close')

        userEvent.click(close)

        await wait(2000)

        expect(screen.queryByTestId('dialog')).toEqual(null)
    })

    it('Rest is covered by MUI team', () => { })
})

export default {};