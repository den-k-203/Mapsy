import { FC, useState } from "react";
import FilterDOBtnComponent from "./FilterBtnComponent";
import ModalFilterMenuComponent from "./ModalFilterMenu";

const FilterDOComponent: FC = () => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <>
            <FilterDOBtnComponent active={active} setActive={setActive}/>
            <ModalFilterMenuComponent active={active} setActive={setActive}/>  
        </>
    )
}

export default FilterDOComponent