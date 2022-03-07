import styled from "styled-components";
import BoxBannerCheckout from "../../components/box-banner-checkout";
import BoxCarCheckout from "../../components/box-car-checkout";
import { CheckoutAnyProps } from "../../interfaces/checkout.interface";

const Grid = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 10px auto;
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`

const BaseCheckout = ({ checkouts }: { checkouts: CheckoutAnyProps[] }) => {
    return (
        <>
            <BoxBannerCheckout />
            <Grid>
                {
                    checkouts.length > 0 &&
                    checkouts.map((checkout: CheckoutAnyProps) =>
                        <BoxCarCheckout key={checkout.id} car={checkout} />
                    )
                }
            </Grid>
        </>
    )
}

export default BaseCheckout;