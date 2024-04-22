import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdataTable, IuserData } from '../../models/dataTable';

const initialState: IdataTable = {
    allUsersList: [],
    error: false,
    loading: false,
};

export const userSlice = createSlice({
    name: 'dataTable',
    initialState,
    reducers: {
        fetchData(state) {
            return {
                ...state,
                loading: true,
                error: false,
            };
        },
        fetchDataSuccess(state, action: PayloadAction<IuserData[]>) {
            return {
                allUsersList: action.payload,
                error: false,
                loading: false,
            };
        },
        fetchDataError(state) {
            return {
                ...state,
                loading: false,
                error: true,
            };
        },
    },
});

export default userSlice.reducer;
