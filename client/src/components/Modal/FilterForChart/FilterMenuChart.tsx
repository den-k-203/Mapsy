import React, { FC, useState } from 'react';
import FilterChartComponent from '../../charts/FilterChart';
import { neighborhoods, weapons } from '../../../config/variables';
import { TextField, MenuItem, Box, Select, InputLabel, FormControl } from '@mui/material';

const DestructionFilterForm: FC = () => {
    const [period, setPeriod] = useState({ start: '', end: '' });
    const [weapon, setWeapon] = useState('');
    const [place, setPlace] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Початкова дата"
                    type="date"
                    value={period.start}
                    onChange={(e) => setPeriod({ ...period, start: e.target.value })}
                    sx={{ input: { color: 'white' }, color: 'white' }}
                    InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                    required
                />
                <TextField
                    label="Кінцева дата"
                    type="date"
                    value={period.end}
                    onChange={(e) => setPeriod({ ...period, end: e.target.value })}
                    sx={{ input: { color: 'white' }, color: 'white' }}
                    InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                    required
                />
                <FormControl fullWidth sx={{ mb: 2, color: "white" }}>
                    <InputLabel sx={{ color: 'white' }}>Зброя</InputLabel>
                    <Select
                        value={weapon}
                        onChange={(e) => setWeapon(e.target.value)}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white',
                                    input: { color: "white" } 
                                },
                            },
                        }}
                    >
                    <MenuItem key={0} value={""}>{"Відсутня"}</MenuItem>
                    {weapons.map((item, index) => (
                        <MenuItem style={{color: "white"}} key={index+1} value={item}><span style={{color: "white"}}>{item}</span></MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2, color: "white" }}>
                    <InputLabel sx={{ color: 'white' }}>Місто або район</InputLabel>
                    <Select
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white',
                                    input: { color: "white" } 
                                },
                            },
                        }}
                    >
                    <MenuItem key={0} value={""}>{"Відсутнє"}</MenuItem>
                    {neighborhoods.map((item, index) => (
                        <MenuItem style={{color: "white"}} key={index+1} value={item}><span style={{color: "white"}}>{item}</span></MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </form>
            <Box sx={{ mt: 4 }}>
                <FilterChartComponent period={period} weapon={weapon} />
            </Box>
        </Box>
    );
};

export default DestructionFilterForm;
