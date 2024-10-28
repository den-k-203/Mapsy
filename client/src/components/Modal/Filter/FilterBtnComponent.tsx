import { tr } from "@faker-js/faker";
import { FC } from "react";
import { CiFilter } from "react-icons/ci";

interface FilterDOBtnComponentProps{
    active: boolean | undefined
    setActive(value: boolean): void
}

const FilterDOBtnComponent: FC<FilterDOBtnComponentProps> = ({active, setActive}) => {    

    const handleChangeActive = () => setActive(true)

    return (
        <div className="block-btn-filter-do">
            <button className="btn-filter-do" data-target="filter" onClick={handleChangeActive}>
                Фільтр <CiFilter/>
            </button>
        </div>
    )
}

export default FilterDOBtnComponent