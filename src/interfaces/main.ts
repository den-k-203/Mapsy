export interface ProcessEnv {
    [key: string]: string | undefined
}
export interface DestractObject {
    _id?: string | undefined,
    title: string,
    position: number[],
    postName: string,
    address: string,
    type: string,
    area: number,
    imgPath: string,
    text: string,
    percentageOfDestruction: string | Date,
    dateOfDestruction: string | Date
}