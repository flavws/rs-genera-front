export interface ResponseInterface<T> {
    data: T;
    message: string;
    status: number;
}
