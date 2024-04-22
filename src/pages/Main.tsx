import { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import UserProfile from '../components/UserProfile/UserProfile';
import { useAppDispatch, useAppSelector } from '../_data/hooks/redux';
import { fetchData } from '../_data/store/actions/dataTableActions';
import style from './Main.module.scss';
import { findAciveUser } from './utils';

const Main = () => {
    const dispatch = useAppDispatch();
    const { allUsersList, activeUser } = useAppSelector((store) => store.dataTable);

    const activeUserData = findAciveUser(allUsersList, activeUser);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className={style.mainPageWrapper}>
            <UserList />
            <UserProfile activeUserData={activeUserData} />
        </div>
    );
};

export default Main;
