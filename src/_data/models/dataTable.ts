export interface IdataTable {
    allUsersList: IuserData[];
    activeUser?: number;
    loading: boolean;
    error: boolean;
}

export interface IuserData {
    id: number;
    name: string;
    age: number;
    email: string;
    position: string;
    department: string;
    compaty: string;
    zodiac: string;
}
