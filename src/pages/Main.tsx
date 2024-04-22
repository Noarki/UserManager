import { useEffect } from 'react';
import UserList from '../components/UserList/UserList';
import UserProfile from '../components/UserProfile/UserProfile';
import { useAppDispatch } from '../_data/hooks/redux';
import { fetchData } from '../_data/store/actions/dataTableActions';

const Main = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div>
            <UserList />
            <UserProfile />
        </div>
    );
};

export default Main;
