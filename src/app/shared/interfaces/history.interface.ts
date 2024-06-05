import { PersonInterface } from "./person.interface";

export interface HistoryInterface {
    id?: number;
    history: string;
    name: string;
    email: string;
    anonymous: boolean;
    status?: boolean;
    creationDate?: Date;
}
