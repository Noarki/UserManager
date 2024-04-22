import { useAppDispatch, useAppSelector } from '../../_data/hooks/redux';
import { fetchData } from '../../_data/store/actions/dataTableActions';
import { userSlice } from '../../_data/store/redusers/dataTableReducer';

import style from './UserList.module.scss';

const UserList: React.FC = () => {
    const dispatch = useAppDispatch();

    const { allUsersList } = useAppSelector((store) => store.dataTable);

    return (
        <>
            <div className={style.mainWrapper}> {JSON.stringify(allUsersList)} </div>
        </>
    );
};

export default UserList;
