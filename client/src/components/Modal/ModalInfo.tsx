import { FC, useState } from "react"
import { itemData } from "../../config/variables"
import InfoItem from "../Tables/InfoItem"
import DestructionObject from "../../types/ObjectDestroy"
import { Box, Button, Modal } from "@mui/material"

interface ModalInfoComponentProp{
    item: DestructionObject
} 

const ModalInfoComponent: FC<ModalInfoComponentProp> = ({item}) => {
    const [show, setShow] = useState<boolean>(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return ( 
        <>
        <Button onClick={handleOpen} sx={{ backgroundColor: '#8e24aa', color: "white"}}>
                Детальніше
        </Button>
            <Modal
                    className="edit-modal"
                    open={show}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                <Box
                    sx={{
                        backgroundColor: "#1F1F1F",
                        color: 'white',
                        width: '80%',
                        maxWidth: "max-content",
                        borderRadius: 2,
                        p: 2,
                        boxShadow: 24,
                        fontSize: "25px"
                    }}
                >
                    <img src={item.imgPath} alt="Картинка відсутня." style={{ width: "500px", height: "500px", margin: "auto", padding: "10px" }} />
                    <InfoItem text={itemData[0]} value={item.address} postValue="" />
                    <InfoItem text={itemData[13]} value={item.areaName} postValue="" />
                    <InfoItem text={itemData[1]} value={item.area} postValue="м²" />
                    <InfoItem text={itemData[4]} value={item.percentageOfDestruction} postValue="%" />
                    <InfoItem text={itemData[5]} value={item.dateOfDestruction} postValue="" />
                    <InfoItem text={itemData[6]} value={item.dateOfRecovery} postValue="" />
                    <InfoItem text={itemData[ 7]} value={item.position[0]} postValue={item.position[1]} />
                    <InfoItem text={itemData[8]} value={item.typeInfrastructure} postValue="" />
                    <InfoItem text={itemData[9]} value={item.stateDestruction} postValue="" />
                    <InfoItem text={itemData[10]} value={item.countVictims} postValue="особи" />
                    <InfoItem text={itemData[11]} value={item.typeDestruction} postValue="" />
                    <InfoItem text={itemData[12]} value={item.whatDestroyed} postValue="" />
                    <div style={{textAlign: "right"}}>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Закрити
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalInfoComponent