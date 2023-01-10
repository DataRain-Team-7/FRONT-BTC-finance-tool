export interface UserTypes {
    id?: string,
    name: string,
    email:string,
    password?:string,
    roleName?: string,
    position: string,
    imageUrl?: string,
    billable?: string,
}

export interface TeamsTypes {
    id?: string,
    name: string,
    valuePerHour: number,
}