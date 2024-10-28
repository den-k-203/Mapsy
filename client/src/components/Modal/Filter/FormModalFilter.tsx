import { FC, useState } from "react";
import { TextField, Typography, FormControl, Select, InputLabel, MenuItem, Box, Button } from '@mui/material';

const FormModalFilter: FC = () => {

    const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: '', end: '' });
    const [objectType, setObjectType] = useState<string>('');
    const [damageState, setDamageState] = useState<string>('');
    const [destroyedBy, setDestroyedBy] = useState<string>('');
    const [victimCount, setVictimCount] = useState<{ min: number; max: number }>({ min: 0, max: 0 });
    const [district, setDistrict] = useState<string>('');
    const [description, setDescription] = useState<string>(''); // Додане поле для опису

    return(
        <>
            <Typography variant="h6" sx={{ color: 'white' }}>Фільтр меню</Typography>

            <TextField
                label="Початкова дата"
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Кінцева дата"
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Тип об'єкта</InputLabel>
                <Select
                    value={objectType}
                    onChange={(e) => setObjectType(e.target.value)}
                    sx={{ input: { color: 'transparent' }, color: 'white' }}
                >
                    <MenuItem value="critical_infrastructure">Критична інфраструктура</MenuItem>
                    <MenuItem value="residential">Житловий сектор</MenuItem>
        
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Стан руйнації</InputLabel>
                <Select
                    value={damageState}
                    onChange={(e) => setDamageState(e.target.value)}
                    sx={{ input: { color: 'transparent' }, color: 'white' }} 
                >
                    <MenuItem value="partial">Частково зруйновані</MenuItem>
                    <MenuItem value="complete">Повністю зруйновані</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'white' }}>Чим знищено</InputLabel>
                <Select
                    value={destroyedBy}
                    onChange={(e) => setDestroyedBy(e.target.value)}
                    sx={{ input: { color: 'transparent' }, color: 'white' }} 
                >
                    <MenuItem value="shahed">Шахед</MenuItem>
                    <MenuItem value="kalibr">Калібр</MenuItem>
                
                </Select>
            </FormControl>

            <TextField
                label="Кількість жертв (мін)"
                type="number"
                value={victimCount.min}
                onChange={(e) => setVictimCount({ ...victimCount, min: Number(e.target.value) })}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />
            <TextField
                label="Кількість жертв (макс)"
                type="number"
                value={victimCount.max}
                onChange={(e) => setVictimCount({ ...victimCount, max: Number(e.target.value) })}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />

            <TextField
                label="Район руйнації"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />

     
            <TextField
                label="Опис"
                multiline
                rows={3} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                sx={{ mb: 2, input: { color: 'transparent' }, textarea: { color: 'transparent' } }} 
                InputLabelProps={{ style: { color: 'white' } }} 
            />
        </>
    )
}

export default FormModalFilter