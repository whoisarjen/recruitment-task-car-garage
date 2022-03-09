import { setupComponent } from "../../utils-test/test.utils";
import BaseBoxBannerCheckout from "./BoxBannerCheckout";
import { screen } from '@testing-library/react'

describe('Testing BoxBannerCheckout', () => {
    it('Expecting to show total value in box', () => {
        const props = {
            total: '1000'
        }

        setupComponent(<BaseBoxBannerCheckout {...props} />)

        screen.getByText(/1000/i)
    })
})

export default {};