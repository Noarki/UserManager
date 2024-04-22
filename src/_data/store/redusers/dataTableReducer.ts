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
        setActiveUserProfile(state, action: PayloadAction<number>) {
            return {
                ...state,
                activeUser: action.payload,
            };
        },
        setNewUserData(state, action: PayloadAction<IuserData>) {
            return {
                ...state,
                allUsersList: [
                    ...state.allUsersList.map((user) => {
                        if (user.id === action.payload.id) {
                            return action.payload;
                        }

                        return user;
                    }),
                ],
            };
        },
    },
});

export default userSlice.reducer;
