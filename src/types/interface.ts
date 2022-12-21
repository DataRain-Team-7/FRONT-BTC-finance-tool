export interface User {
    id?: string,
    name: string,
    email:string,
    password?:string,
    role: string,
    image: string,
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TeamsTypes {
    id?: number,
    name: string,
    price: number,
}