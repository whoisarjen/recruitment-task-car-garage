import styled from 'styled-components'
import { useBoxBannerCheckoutProps } from './useBoxBannerCheckout'

const Box = styled.div`
    width: 100%;
    min-height: 100px;
    background #ddd;
    display: grid;
    grid-template-columns: 1fr;
`

const H1 = styled.h1`
    margin: auto;
    text-align: center;
`

const BaseBoxBannerCheckout = ({ total }: useBoxBannerCheckoutProps) => {
    return (
        <Box>
            <H1>TOTAL: {total}$</H1>
        </Box>
    )
}

export default BaseBoxBannerCheckout;