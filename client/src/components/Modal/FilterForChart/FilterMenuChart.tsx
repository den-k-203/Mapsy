import React, { FC, useState } from 'react';
import FilterChartComponent from '../../charts/FilterChart';
import { neighborhoods, weapons } from '../../../config/variables';
import { TextField, MenuItem, Box, Select, InputLabel, FormControl } from '@mui/material';
import ExtremumModalComponent from '../Extremum/ExtremumModal';
import doStore from '../../../store/DOStore';
import { parse } from 'date-fns';

const DestructionFilterForm: FC = () => {
    const dates = doStore.destructionObjects.map(item => new Date(item.dateOfDestruction).getTime());
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    const formatDateForInput = (date: Date) => date.toISOString().split('T')[0];

    const [place, setPlace] = useState('')
    const [period, setPeriod] = useState({ start: formatDateForInput(minDate), end: formatDateForInput(maxDate) });
    const [weapon, setWeapon] = useState('');

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
            </form>
            <Box sx={{ mt: 4 }}>
                <FilterChartComponent period={period} weapon={weapon} place={place} />
            </Box>
            <ExtremumModalComponent/>
        </Box>
    );
};

export default DestructionFilterForm;
