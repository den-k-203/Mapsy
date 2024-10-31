import React, { FC } from "react";
import { neighborhoods, weapons, destructionTypes, infrastructureTypes, destructionStates } from "../../config/variables";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import DestructionObject from "../../types/ObjectDestroy";

interface ModalFormProps {
  data: DestructionObject; // Using the interface
  setData: React.Dispatch<React.SetStateAction<DestructionObject>>;
}

const ModalForm: FC<ModalFormProps> = ({ data, setData }: any) => {
  const selectChangeHandler = (event: SelectChangeEvent<string>) => {
    setData((prevState: any) => ({
        ...prevState,
        [event.target.name]: event.target.value
    }));
};

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prevState: DestructionObject) => ({
        ...prevState,
        [event.target.name]: event.target.value
    }));
};

  const changePositionHandler = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevState: DestructionObject) => {
          const newPosition = [...prevState.position];
          newPosition[index] = event.target.value;
          return { ...prevState, position: newPosition as [string, string] };
      });
  };

  return (
  <Box component="form">
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                      id="title"
                      name="title"
                      label="Заголовок"
                      variant="outlined"
                      fullWidth
                      value={data.title}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="area"
                      name="area"
                      label="Площа м²"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={data.area}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>

              <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
                      <InputLabel id="areaName-label"  sx={{ color: 'white' }}>Назва району</InputLabel>
                      <Select
                          labelId="areaName-label"
                          id="areaName"
                          name="areaName"
                          value={data.areaName}
                          onChange={selectChangeHandler}
                          label="Назва району Києва або місто"
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
              </Grid>

              <Grid item xs={12}>
                  <TextField
                      id="address"
                      name="address"
                      label="Адреса"
                      variant="outlined"
                      fullWidth
                      value={data.address}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>

              <Grid item xs={12}>
                  <TextField
                      id="description"
                      name="description"
                      label="Опис"
                      variant="outlined"
                      fullWidth
                      value={data.description}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="firstPosition"
                      name="position"
                      label="Х позиція"
                      variant="outlined"
                      type="number"
                      fullWidth
                      value={data.position[0]}
                      onChange={changePositionHandler(0)}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="secondPosition"
                      name="position"
                      label="Y позиція"
                      variant="outlined"
                      type="number"
                      fullWidth
                      value={data.position[1]}
                      onChange={changePositionHandler(1)}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="typeInfrastructure-label" sx={{ color: 'white' }}>Тип інфраструктури</InputLabel>
                    <Select
                        id="typeInfrastructure"
                        name="typeInfrastructure"
                        label="Тип інфраструктури"
                        value={data.typeInfrastructure}
                        onChange={selectChangeHandler}
                        sx={{ input: { color: 'white' }, color: 'white' }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white', 
                                },
                            },
                        }}
                    >
                        {infrastructureTypes.map((type) => (
                            <MenuItem key={type} value={type} sx={{ color: 'white' }}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="percentageOfDestruction"
                      name="percentageOfDestruction"
                      label="Відсоток руйнацій"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={data.percentageOfDestruction}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true}}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="dateOfDestruction"
                      name="dateOfDestruction"
                      label="Дата руйнування"
                      variant="outlined"
                      fullWidth
                      type="date"
                      value={data.dateOfDestruction}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                      InputProps={{
                          inputProps: {
                              max: new Date().toISOString().split("T")[0], // Prevent future dates
                          },
                      }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="dateOfRecovery"
                      name="dateOfRecovery"
                      label="Дата відновлення"
                      variant="outlined"
                      fullWidth
                      type="date"
                      value={data.dateOfRecovery}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                      InputProps={{
                          inputProps: {
                              max: new Date().toISOString().split("T")[0], // Prevent future dates
                          },
                      }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="typeDestruction-label" sx={{ color: 'white' }}>Стан руйнації</InputLabel>
                    <Select
                        id="stateDestruction"
                        name="stateDestruction"
                        label="Стан руйнації"
                        value={data.stateDestruction}
                        onChange={selectChangeHandler}
                        sx={{ input: { color: 'white' }, color: 'white' }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white', 
                                },
                            },
                        }}
                    >
                        {destructionStates.map((destruction) => (
                            <MenuItem key={destruction} value={destruction} sx={{ color: 'white' }}>
                                {destruction}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                      id="countVictims"
                      name="countVictims"
                      label="Кількість жертв"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={data.countVictims}
                      onChange={changeHandler}
                      sx={{ input: { color: 'white' }, color: 'white' }}
                      InputLabelProps={{ style: { color: 'white' } }}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="typeDestroy-label"  sx={{ color: 'white' }}>Тип знищення</InputLabel>
                    <Select
                        labelId="typeDestroy-label"
                        id="typeDestruction"
                        name="typeDestruction"
                        value={data.typeDestruction}
                        onChange={selectChangeHandler}
                        label="Тип знищення"
                        sx={{ input: { color: 'white' }, color: 'white' }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white', 
                                },
                            },
                        }}
                    >
                        <MenuItem value="" disabled>Оберіть метод знищення</MenuItem>
                        {destructionTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="whatDestroyed-label" sx={{ color: 'white' }}>Чим знищено</InputLabel>
                    <Select
                        labelId="whatDestroyed-label"
                        id="whatDestroyed"
                        name="whatDestroyed"
                        value={data.whatDestroyed}
                        onChange={selectChangeHandler}
                        label="Чим знищено"
                        sx={{ input: { color: 'white' }, color: 'white' }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: 'black', 
                                    color: 'white', 
                                },
                            },
                        }}
                    >
                        <MenuItem value="" disabled>Оберіть чим знищено</MenuItem>
                        {weapons.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
              </Grid>
          </Grid>
      </Box>
  );
};

export default ModalForm;