import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe('Testing Navbar', () => {
    it('Expect to show children element', () => {
        render(<Navbar><button data-testid="button">Button</button></Navbar>)

        screen.getByTestId('button')
    })

    it('Rest is tested by MUI team', () => { })
})

export default {};