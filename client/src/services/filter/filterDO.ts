import FilterData from "../../types/filter";
import DestructionObject from "../../types/ObjectDestroy";

const filterDestructionData = (destructionData: DestructionObject[], filterData: FilterData) => {
    return destructionData.filter((item) => {
      const matchesDateRange =
        (!filterData.dateRange.start || new Date(item.dateOfDestruction) >= new Date(filterData.dateRange.start)) &&
        (!filterData.dateRange.end || new Date(item.dateOfDestruction) <= new Date(filterData.dateRange.end));
      const matchesObjectType = filterData.objectType ? item.typeInfrastructure === filterData.objectType : true;
      const matchesDamageState = filterData.damageState ? item.stateDestruction === filterData.damageState : true;
      const matchesDestroyedBy = filterData.destroyedBy ? item.whatDestroyed === filterData.destroyedBy : true;
      const matchesVictimCount =
        item.countVictims >= filterData.victimCount.min &&
        (filterData.victimCount.max === 0 || item.countVictims <= filterData.victimCount.max);
      const matchesDistrict = filterData.areaName ? item.areaName === filterData.areaName : true;

      return matchesDateRange && matchesObjectType && matchesDamageState && matchesDestroyedBy && matchesVictimCount && matchesDistrict;
    });
};

export {filterDestructionData}