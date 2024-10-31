import { FC, useState } from "react"
import { Modal, Box, Button, Typography, TextField, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import FilterData from "../../../types/filter";
import doStore from "../../../store/DOStore";
import DestructionObject from "../../../types/ObjectDestroy";
import { filterDestructionData } from "../../../services/filter/filterDO";
import DOHttp from "../../../http/DOhttp";
import { destructionStates, destructionTypes, infrastructureTypes, neighborhoods, weapons } from "../../../config/variables";

interface ModalProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

const ModalFilterMenuComponent: FC<ModalProps> = ({ active, setActive }) => {
    const [filterData, setFilterData] = useState<FilterData>({
        dateRange: { start: '', end: '' },
        objectType: '',
        damageState: '',
        destroyedBy: '',
        victimCount: { min: 0, max: 0 },
        areaName: ''
    });

    const handleChange = (key: keyof FilterData, value: any) => {
        setFilterData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleFilter = async () => {
        const reseponse = await DOHttp.getDOAll()
        if(reseponse.data && reseponse.status == 200){
            const result: DestructionObject[] | undefined = filterDestructionData(reseponse.data, filterData)
            if(result)
                doStore.init(result)
                handleClose()
        }
    };

    const handleClose = () => setActive(false)

    return (
        <Modal open={active} onClose={handleClose}>
            <Box className="filter-box">
            <Typography variant="h6" sx={{ color: 'white' }}>Фільтр меню</Typography>

            <TextField
                label="Початкова дата"
                type="date"
                value={filterData.dateRange.start}
                onChange={(e) => handleChange('dateRange', { ...filterData.dateRange, start: e.target.value })}
                fullWidth
                sx={{ mb: 2, input: { color: 'white' } }} 
                InputLabelProps={{ style: { color: 'white' }, shrink: true }}
            />
            <TextField
                label="Кінцева дата"
                type="date"
                value={filterData.dateRange.end}
                onChange={(e) => handleChange('dateRange', { ...filterData.dateRange, end: e.target.value })}
                fullWidth
                sx={{ mb: 2, input: { color: 'white' } }} 
                InputLabelProps={{ style: { color: 'white' }, shrink: true }} 
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Тип об'єкта</InputLabel>
                <Select
                    value={filterData.objectType}
                    onChange={(e) => handleChange('objectType', e.target.value)}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'black', 
                                color: 'white', 
                            },
                        },
                    }}
                >
                {infrastructureTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>{type}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Стан руйнації</InputLabel>
                <Select
                    value={filterData.damageState}
                    onChange={(e) => handleChange('damageState', e.target.value)}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'black', 
                                color: 'white', 
                            },
                        },
                    }}
                >
                {destructionStates.map((state, index) => (
                    <MenuItem key={index} value={state}>{state}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Чим знищено</InputLabel>
                <Select
                    value={filterData.destroyedBy}
                    onChange={(e) => handleChange('destroyedBy', e.target.value)}
                    sx={{ color: 'white' }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'black', 
                                color: 'white', 
                            },
                        },
                    }}
                >
                {weapons.map((weapons, index) => (
                    <MenuItem key={index} value={weapons}>{weapons}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <TextField
                label="Кількість жертв (мін)"
                type="number"
                value={filterData.victimCount.min}
                onChange={(e) => handleChange('victimCount', { ...filterData.victimCount, min: Number(e.target.value) })}
                fullWidth
                sx={{ mb: 2, input: { color: 'white' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />
            <TextField
                label="Кількість жертв (макс)"
                type="number"
                value={filterData.victimCount.max}
                onChange={(e) => handleChange('victimCount', { ...filterData.victimCount, max: Number(e.target.value) })}
                fullWidth
                sx={{ mb: 2, input: { color: 'white' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />

            <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>    
                <InputLabel id="district-label"  sx={{ color: 'white' }}>Місто або район</InputLabel>
                <Select
                    labelId="areaName-label"
                    id="areaName"
                    name="areaName"
                    onChange={(e) => handleChange('areaName', e.target.value)}
                    label="Місто або район"
                    sx={{ color: 'white' }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'black', 
                                color: 'white', 
                            },
                        },
                    }}
                >
                    <MenuItem value="" disabled>Оберіть район</MenuItem>
                    {neighborhoods.map((neighborhood, index) => (
                        <MenuItem key={index} value={neighborhood}>{neighborhood}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div style={{width: 'max-content', margin: 'auto'}}>
                <Button variant="contained" color="primary" onClick={handleFilter}>
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