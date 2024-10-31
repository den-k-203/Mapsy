import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import doStore from "../store/DOStore";
import DestructionObject from "../types/ObjectDestroy";
import DOHttp from "../http/DOhttp";

const DOSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleSearch = async () => {
      const response = await DOHttp.getDOAll()

      if(response.data && response.status == 200){
        const data = response.data
        const filtered = data.filter((obj: DestructionObject) => {
          const attributeValue = obj[searchValue as keyof DestructionObject];
          return (
            attributeValue &&
            attributeValue.toString().toLowerCase().includes(value.toLowerCase())
          );
      });
      
      doStore.init(filtered);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue, value]);

  return (
    <div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <TextField
          label="Пошук"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          sx={{ input: { color: 'white' }, color: 'white', marginRight: "20px" }}
          InputLabelProps={{ style: { color: 'white' }, shrink: true }}
          required
        />
        <FormControl fullWidth sx={{ width: "200px", color: "white", borderColor: "white", marginRight: "10px" }}>
          <InputLabel sx={{ color: 'white' }}>Значення пошуку</InputLabel>
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
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)} // Update search attribute on change
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'black',
                  color: 'white',
                },
              },
            }}
          >
            <MenuItem value="typeInfrastructure">Тип інфраструктури</MenuItem>
            <MenuItem value="title">Заголовок</MenuItem>
            <MenuItem value="address">Адреса</MenuItem>
            <MenuItem value="whatDestroyed">Зброя</MenuItem>
            <MenuItem value="areaName">Місто або район</MenuItem>
          </Select>
        </FormControl>
        <button className="btn-filter-do search" onClick={handleSearch}>
          Пошук <IoSearch size={15} />
        </button>
      </div>
    </div>
  );
};

export default DOSearch;
