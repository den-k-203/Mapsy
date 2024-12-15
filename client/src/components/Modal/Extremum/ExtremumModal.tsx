import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import GPTHttp from "../../../http/GPTHttp";
import doStore from "../../../store/DOStore";

const ExtremumModalComponent: FC = () => {
    const [answer, setAnswer] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        setAnswer(null);
        try {
            const data = doStore.destructionObjects;
            console.log(doStore.destructionObjects[1])
            const response = await GPTHttp.getAnswer(data);
            if (response.data) {
                setAnswer(response.data.gpt_answer);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching GPT answer:", error);
        }
    };

    return (
        <>
            <div className="extremum-search">
                <button className="btn-filter-do" onClick={handleSubmit}>
                    Пошук екстремумів <FaSearch />
                </button>
            </div>
            <div style={{marginTop: "20px"}}>
                {isLoading ? (
                    <div  style={{margin: "auto", width: "max-content"}}>
                        <HashLoader color="purple"/>
                    </div>
                ) : (
                    answer && <div style={{fontSize: "30px"}}>{answer}</div>
                )}
            </div>
        </>
    );
};

export default ExtremumModalComponent;
