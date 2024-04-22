import axios from 'axios';
import { userSlice } from '../redusers/dataTableReducer';
import { AppDispatch } from '../store';
import { IuserData } from '../../models/dataTable';

export const fetchData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.fetchData());

        const result = await axios.get<IuserData[]>('http://localhost:3001/users');

        if (result) {
            return dispatch(userSlice.actions.fetchDataSuccess(result.data));
        }
    } catch {
        dispatch(userSlice.actions.fetchDataError());
    }
};
