import { FC } from "react"
import { Modal, Box, Button, Typography } from '@mui/material';
import FormModalFilter from "./FormModalFilter";

interface ModalProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

const ModalFilterMenuComponent: FC<ModalProps> = ({ active, setActive }) => {

    const handleClose = () => setActive(false)
    
    return (
        <Modal open={active} onClose={handleClose}>
            <Box className="filter-box">
                <FormModalFilter/>
                <div style={{width: 'max-content', margin: 'auto'}}>
                    <Button variant="contained" color="primary">
                        Підтвердити
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleClose} sx={{ ml: 2 }}>
                        Скасувати
                    </Button>
                </div>
            </Box>

        </Modal>
    )
}

export default ModalFilterMenuComponent