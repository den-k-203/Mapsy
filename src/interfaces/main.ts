export interface ProcessEnv {
    [key: string]: string | undefined
}
export interface DestractObject {
    title: string;
    position: any[];
    postName: string;
    address: string;
    typeInfrastructure: string;
    area: number;
    imgPath: string;
    description: string;
    percentageOfDestruction: string;
    dateOfDestruction: string;
    dateOfRecovery: string;
    typeDestruction: string;
    stateDestruction: string,
    countVictims: number;
    whatDestroyed: string;
    areaName: string;
    neighborhood: string,
    _id: string | undefined; 
}