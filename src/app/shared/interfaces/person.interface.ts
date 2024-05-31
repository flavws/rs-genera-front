import { HistoryInterface } from "./history.interface";
import { SchedulingInterface } from "./scheduling.interface";

export interface PersonInterface {
    id?: number;
    name: string;
    email?: string;
    isAnonymous: boolean;
    history?: string;
    status?: boolean;
    password?: string;
}
