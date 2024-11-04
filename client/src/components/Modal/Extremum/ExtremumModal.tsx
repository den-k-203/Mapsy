import { Button } from "@mui/material";
import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import GPTHttp from "../../../http/GPTHttp";
import doStore from "../../../store/DOStore";

const ExtremumModalComponent: FC = () => {
    const [answer, setAnswer] = useState<any | undefined>()

    const handleSubmit = async () => {
        const data = doStore.destructionObjects
        const response = await GPTHttp.getAnswer(data)
        if(response.data){
            setAnswer(response.data.gpt_answer)
        }
    }

    return (
        <>
        <div className="extremum-search">
            <button className="btn-filter-do" onClick={handleSubmit}>
                Пошук екстремумів <FaSearch/>
            </button>
        </div>
        <div>
            {answer}
        </div>
        </>
    )
}

export default ExtremumModalComponent