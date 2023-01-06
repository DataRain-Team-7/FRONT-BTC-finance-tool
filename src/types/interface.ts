export interface User {
    id?: string,
    name: string,
    email:string,
    password?:string,
    imageUrl: string,
    position: string,
    roleName: string,
    billable?: string,
    allocated?: string,
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TeamsTypes {
    id?: number,
    name: string,
    price: number,
}