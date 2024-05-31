import { SchedulingInterface } from "./scheduling.interface";

export interface ProfissionalInterface {
    id?: number;
    name: string;
    email?: string;
    occupation_area: string;
    professional_record?: string;
    platforms: string[];
    password?: string;
    status?: boolean;
}
