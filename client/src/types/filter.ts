export default interface FilterData {
    dateRange: { start: string | null; end: string | null }; 
    objectType: string | null;
    damageState: string | null;
    destroyedBy: string | null;
    victimCount: { min: number ; max: number };
    areaName: string | null;
}