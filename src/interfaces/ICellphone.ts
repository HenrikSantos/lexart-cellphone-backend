export interface ICellphoneStructure01 {
    name: string,
    brand: string,
    model: string,
    price: number,
    color: string
}

export interface ICellphoneStructure02 {
    name: string,
    details: {
        model: string,
        color: string
        brand: string,
    }
    price: number,
}

export interface ICellphoneData {
    id?: number;
    CellphoneId?: number;
    price: number;
    color: string;
}

export interface ICellphoneStructure03Item {
    id?: number,
    name: string,
    brand: string,
    model: string,
    data: ICellphoneData[]
}

export type ICellphoneStructure03 = ICellphoneStructure03Item[];
