
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { NavbarProps } from '.';
import usePath from '../../hooks/usePath';
import { useAppSelector } from '../../hooks/useRedux';

const useNavbar = ({ children, navigateTo }: NavbarProps) => {
    const checkout = useAppSelector(state => state.checkout.checkout)
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { path } = usePath()

    return { children, theme, open, setOpen, path, navigateTo, checkout }
}

export type useNavbarProps = ReturnType<typeof useNavbar>

export default useNavbar;