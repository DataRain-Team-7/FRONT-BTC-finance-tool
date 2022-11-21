export interface User {
    id?: string,
    name: string,
    email:string,
    password:string,
    confirmPassword: string,
    phone: number,
    role: string,
    image: string,
    createdAt?: Date;
    updatedAt?: Date;
}