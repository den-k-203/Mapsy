import { FC } from "react"
import generateDestructionObjects from "../../../services/generateDO"
import DOHttp from "../../../http/DOhttp"
import useAppSelector from "../../../hooks/reduxHooks/useAppSelector.hook";
import doStore from "../../../store/DOStore";

const BtnGenerateDataComponent: FC = () => {
    const token = useAppSelector(state => state.token.accessToken);
    const handleGenerate = async () => {
        const objects = generateDestructionObjects
        objects.forEach(async (object) => {
            if(token){
               const response = await DOHttp.createDO(token, object)
                if(response.data && response.status == 200){
                    doStore.addDestructionObject(response.data)
                }
            }
        })
    }

    return (
        <button className="btn-filter-do" style={{marginTop: "10px"}} onClick={handleGenerate}>
            Згенерувати дані 
        </button>
    )
}

export default BtnGenerateDataComponent