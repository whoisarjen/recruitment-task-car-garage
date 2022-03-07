import BaseNavbar from "./Navbar";
import useNavbar from "./useNavbar";

export interface NavbarProps {
    children: any
    navigateTo: (arg0: string) => void
}

const Navbar = ({ children, navigateTo }: NavbarProps) => {
    const props = useNavbar({ children, navigateTo })

    return <BaseNavbar {...props} />
}

export default Navbar;