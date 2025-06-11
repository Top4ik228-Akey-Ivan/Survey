export interface IQuestion {
    id: number;
    text: string;
}

export interface IUnit {
    id: number;
    unitTitle: string;
    questions: IQuestion[];
}