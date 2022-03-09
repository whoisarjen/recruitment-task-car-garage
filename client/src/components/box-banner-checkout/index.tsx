import BaseBoxBannerCheckout from "./BoxBannerCheckout";
import useBoxBannerCheckout from "./useBoxBannerCheckout";

const BoxBannerCheckout = () => {
    const props = useBoxBannerCheckout();
    
    return <BaseBoxBannerCheckout {...props} />
}

export default BoxBannerCheckout;