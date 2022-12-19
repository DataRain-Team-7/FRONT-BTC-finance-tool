export interface User {
    id?: number,
    name: string,
    email:string,
    password?:string,
    confirmPassword?: string,
    // phone: number,
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