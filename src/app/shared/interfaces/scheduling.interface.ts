import { PersonInterface } from "./person.interface";
import { ProfissionalInterface } from "./profissional.interface";

export interface SchedulingInterface {
    id: number;
    date: Date;
    observation: string;
    status: boolean;
    creationDate?: Date;
    person: PersonInterface;
    profissional: ProfissionalInterface;
}
