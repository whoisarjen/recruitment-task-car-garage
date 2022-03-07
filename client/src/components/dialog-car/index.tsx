import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { CarProps } from '../../interfaces/car.interface';
import styled from "styled-components";

const Table = styled.table`
    width: 100%;
`

const DialogCar = ({ children, car: { list_cars_vehicles_make, list_cars_vehicles_model, list_name, list_cars_location } }: { children: any, car: CarProps }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <div data-testid="submit" onClick={() => setOpen(true)}>{children}</div>
            <Dialog
                data-testid="dialog"
                fullScreen={fullScreen}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {list_cars_vehicles_make} {list_cars_vehicles_model}
                </DialogTitle>
                <DialogContent>
                    {/* Normally I would use smth like i18n to dynamically translate keys to "human" sentences, so we could omit keys we don't want to use and show rest by using Object.keys */}
                    <Table>
                        <tbody>
                            <tr>
                                <td>Warehouse:</td>
                                <td>{list_name}</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>{list_cars_location}</td>
                            </tr>
                        </tbody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button data-testid="close" onClick={() => setOpen(false)}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogCar;