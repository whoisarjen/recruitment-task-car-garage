import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe('Testing Navbar', () => {
    it('Expect to show children element', () => {
        render(<Navbar navigateTo={jest.fn()}><button data-testid="button">Button</button></Navbar>)

        screen.getByTestId('button')
    })

    it.todo('Check navigateTo behave')

    it('Rest is tested by MUI team', () => { })
})

export default {};