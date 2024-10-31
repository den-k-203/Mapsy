import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC, useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import doStore from "../store/DOStore";
import DestructionObject from "../types/ObjectDestroy";

const SortDoComponent: FC = () => {
    const [sortValue, setSortValue] = useState<string>("");
    
    const handleSort = () => {
        const sorted = [...doStore.destructionObjects].sort((a: any, b: any) => {
            if (a[sortValue as keyof DestructionObject] < b[sortValue as keyof DestructionObject]) {
                return -1;
            }
            if (a[sortValue as keyof DestructionObject] > b[sortValue as keyof DestructionObject]) {
                return 1;
            }
            return 0;
        });
        doStore.init(sorted);
    };

    return (
        <div style={{ width: "max-content", margin: "auto", marginTop: "15px" }}>
            <FormControl fullWidth sx={{ width: "200px", color: "white", borderColor: "white", marginRight: "10px" }}>
                <InputLabel sx={{ color: 'white' }}>Значення сортування</InputLabel>
                <Select
                    sx={{
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                    }}
                    value={sortValue}
                    onChange={e => setSortValue(e.target.value)}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        },
                    }}
                >
                    <MenuItem key="typeInfrastructure" value="typeInfrastructure">Тип інфраструктури</MenuItem>
                    <MenuItem key="title" value="title">Заголовок</MenuItem>
                    <MenuItem key="address" value="address">Адреса</MenuItem>
                    <MenuItem key="whatDestroyed" value="weapon">Зброя</MenuItem>
                    <MenuItem key="areaName" value="place">Місто або район</MenuItem>
                </Select>
            </FormControl>
            <button className="btn-filter-do" onClick={handleSort}>
                Сортувати <TiArrowUnsorted size={20} />
            </button>
        </div>
    );
};

export default SortDoComponent;
