import { useAppDispatch, useAppSelector } from '../../_data/hooks/redux';
import { fetchData } from '../../_data/store/actions/dataTableActions';
import { userSlice } from '../../_data/store/redusers/dataTableReducer';
import Button from '../Button/Button';

import style from './UserList.module.scss';

const UserList: React.FC = () => {
    const dispatch = useAppDispatch();

    const { allUsersList } = useAppSelector((store) => store.dataTable);

    const handleClick = (id: number) => {
        dispatch(userSlice.actions.setActiveUserProfile(id));
    };

    return (
        <div className={style.btnNameListWrapper}>
            {allUsersList.map((userInfo) => (
                <div className={style.btnNameWrapper} key={userInfo.id}>
                    <img alt='??' src='' className={style.icon} />
                    <Button onClick={() => handleClick(userInfo.id)} className={style.nameBtn}>
                        {userInfo.name}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default UserList;
