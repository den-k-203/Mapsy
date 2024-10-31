import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { FC, useState } from "react"
import DestructionObject from "../../../types/ObjectDestroy"
import doStore from "../../../store/DOStore"
import useAppSelector from "../../../hooks/reduxHooks/useAppSelector.hook"
import DOHttp from "../../../http/DOhttp"
import ModalForm from "../ModalForm"
import InfoItem from "../../Tables/InfoItem"
import { toast } from "react-toastify"
import { itemData } from "../../../config/variables"

interface EditModalProp{
    item: DestructionObject
}

const EditModalComponent: FC<EditModalProp> = ({item}) => {
    const initialData: DestructionObject = {
        title: item ? item.title : "",
        position: item ? item.position : ["0", "0"],
        postName: item ? item.postName : "",
        address: item ? item.address : "",
        area: item ? item.area : 0,
        typeInfrastructure: item ? item.typeInfrastructure : "",
        imgPath: item ? item.imgPath : "",
        description: item ? item.description : "",
        percentageOfDestruction: item ? item.percentageOfDestruction : "",
        dateOfDestruction: item ? item.dateOfDestruction : "",
        dateOfRecovery: item ? item.dateOfRecovery : "",
        typeDestruction: item ? item.typeDestruction : "",
        countVictims: item ? item.countVictims : 0,
        whatDestroyed: item ? item.whatDestroyed : "",
        areaName: item ? item.areaName : "",
        _id: item ? item._id : "",
        neighborhood: item ? item.neighborhood : "",
        stateDestruction: ""
      };
    
      const [data, setData] = useState<DestructionObject>(initialData);
      const token = useAppSelector(state => state.token.accessToken);
      
      const updateHandler = async () => {
        if(token && initialData._id){
          const reseponse = await DOHttp.editDO(data, token)
          if(reseponse.data && reseponse.status == 200){
            doStore.updateDestructionObject(reseponse.data)
            toast.success("Об'єкт успішно оновлено!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
          }
        }
      };
    
      const deleteHandler = async () => {
        if(token && initialData._id){
          const reseponse = await DOHttp.removeDO(initialData._id, token)
          if(reseponse && reseponse.status == 200){
            doStore.removeDestructionObject(initialData._id)
            toast.success("Об'єкт успішно видалено!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        }
      };
  
    const [active, setActive] = useState<boolean>(false)
    const handleClose = () => setActive(false)
    const handleOpen = () => setActive(true)

    return (
        <>
            <Button onClick={handleOpen} sx={{ backgroundColor: '#8e24aa', color: "white"}}>
                Редагувати
            </Button>
            <Modal
                className="edit-modal"
                open={active}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                    <Box
                        className='edit-modal'
                        sx={{
                            backgroundColor: "#1F1F1F",
                            color: 'white',
                            width: '80%',
                            maxWidth: 900,
                            borderRadius: 2,
                            p: 2,
                            boxShadow: 24,
                        }}
                    >
                    <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
                        {item.title}
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={5} sx={{ borderRight: "2px solid #E1E1E1" }}>
                            <img src={item.imgPath} alt="Картинка відсутня." style={{ width: "90%", padding: "10px" }} />
                            <InfoItem text={itemData[0]} value={item.address} postValue="" />
                            <InfoItem text={itemData[13]} value={item.areaName} postValue="" />
                            <InfoItem text={itemData[1]} value={item.area} postValue="м²" />
                            <InfoItem text={itemData[4]} value={item.percentageOfDestruction} postValue="%" />
                            <InfoItem text={itemData[5]} value={item.dateOfDestruction} postValue="" />
                            <InfoItem text={itemData[6]} value={item.dateOfRecovery} postValue="" />
                            <InfoItem text={itemData[7]} value={item.position[0]} postValue={item.position[1]} />
                            <InfoItem text={itemData[8]} value={item.typeInfrastructure} postValue="" />
                            <InfoItem text={itemData[9]} value={item.stateDestruction} postValue="" />
                            <InfoItem text={itemData[10]} value={item.countVictims} postValue="особи" />
                            <InfoItem text={itemData[11]} value={item.typeDestruction} postValue="" />
                            <InfoItem text={itemData[12]} value={item.whatDestroyed} postValue="" />
                        </Grid>

                        <Grid item xs={7}>
                            <Typography variant="h6" gutterBottom>Редагування даних</Typography>
                            <ModalForm data={data} setData={setData} />
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                        <Button variant="contained" color="success" onClick={updateHandler} sx={{ mr: 1 }}>
                            Оновити
                        </Button>
                        <Button variant="contained" color="error" onClick={deleteHandler} sx={{ mr: 1 }}>
                            Видалити
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Закрити
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default EditModalComponent