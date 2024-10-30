import { FC } from "react";
import { CiFilter } from "react-icons/ci";
import { TiRefresh } from "react-icons/ti";
import DOHttp from "../../../http/DOhttp";
import doStore from "../../../store/DOStore";
import { toast } from "react-toastify";

interface FilterDOBtnComponentProps{
    active: boolean | undefined
    setActive(value: boolean): void
}

const FilterDOBtnComponent: FC<FilterDOBtnComponentProps> = ({active, setActive}) => {    

    const handleChangeActive = () => setActive(true)

    const handleRefresh = async () => {
        const response = await DOHttp.getDOAll()
        if(response.data && response.status == 200){
            doStore.init(response.data)
            toast.success("Таблиця успішно оновлена!", {
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

    return (
        <div className="block-btn-filter-do">
            <button className="btn-filter-do" data-target="filter" onClick={handleChangeActive}>
                Фільтр <CiFilter size={20}/>
            </button>
            <button className="btn-filter-do" onClick={handleRefresh}>
                Оновити <TiRefresh size={20}/>
            </button>
        </div>
    )
}

export default FilterDOBtnComponent