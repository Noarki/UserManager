import React from 'react';
import { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import UserProfile from '../components/UserProfile/UserProfile';
import { useAppDispatch, useAppSelector } from '../_data/hooks/redux';
import { fetchData } from '../_data/store/actions/dataTableActions';
import style from './Main.module.scss';
import { findAciveUser } from './utils';
import Loading from '../components/Loading/Loading';

const Main: React.FC = () => {
    const dispatch = useAppDispatch();

    const { allUsersList, activeUser, loading, error } = useAppSelector((store) => store.dataTable);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className={style.mainPageWrapper}>
            {error && <h1 className={style.errorWarning}>Возникла ошибка получения данных! </h1>}
            {loading && <Loading />}
            <UserList />
            {activeUser && <UserProfile activeUserData={findAciveUser(allUsersList, activeUser)} />}
        </div>
    );
};

export default Main;
