import { IuserData } from '../_data/models/dataTable';

export const findAciveUser = (arr: IuserData[], id: number | undefined) => arr.find((user) => id === user.id);
