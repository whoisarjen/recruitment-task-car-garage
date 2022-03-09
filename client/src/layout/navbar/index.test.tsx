import { screen } from "@testing-library/react";
import Navbar from ".";
import { setupComponent } from "../../utils-test/test.utils";

describe('Testing Navbar', () => {
    it('Expect to show children element', () => {
        setupComponent(<Navbar navigateTo={jest.fn()}><button data-testid="button">Button</button></Navbar>)

        screen.getByTestId('button')
    })

    it.todo('Check navigateTo behave')

    it('Rest is tested by MUI team', () => { })
})

export default {};