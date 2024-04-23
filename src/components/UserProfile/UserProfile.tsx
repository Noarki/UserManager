import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../_data/hooks/redux';
import { IuserData } from '../../_data/models/dataTable';
import { userSlice } from '../../_data/store/redusers/dataTableReducer';
import Button from '../Button/Button';
import UserDataRow from './UserDataRow/UserDataRow';
import style from './UserProfile.module.scss';

interface IProps {
    activeUserData: IuserData | undefined;
}

const UserProfile: React.FC<IProps> = ({ activeUserData }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [user, setUser] = useState<IuserData>();

    const dispatch = useAppDispatch();

    useEffect(() => {
        setUser(activeUserData);
    }, [activeUserData]);

    const handleClick = () => {
        if (user) {
            setIsChanged(false);
            dispatch(userSlice.actions.setNewUserData(user));
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        if (!isChanged) {
            setIsChanged(true);
        }

        if (user) {
            setUser({ ...user, [key]: event.target.value });
        }
    };

    return (
        <div className={style.userProfileMainWrapper}>
            <UserDataRow
                headerText='Имя'
                userInfo={user?.name || ''}
                onChange={handleChange}
                dataKey={'name'}
            />
            <UserDataRow
                headerText='Возраст'
                userInfo={user?.age || ''}
                onChange={handleChange}
                dataKey={'age'}
            />
            <UserDataRow
                headerText='Знак Зодиака'
                userInfo={user?.zodiac || ''}
                onChange={handleChange}
                dataKey={'zodiac'}
            />
            <UserDataRow
                headerText='Компания'
                userInfo={user?.company || ''}
                onChange={handleChange}
                dataKey={'company'}
            />
            <UserDataRow
                headerText='Отдел'
                userInfo={user?.department || ''}
                onChange={handleChange}
                dataKey={'department'}
            />
            <UserDataRow
                headerText='Должность'
                userInfo={user?.position || ''}
                onChange={handleChange}
                dataKey={'position'}
            />
            <UserDataRow
                headerText='Электронная почта'
                userInfo={user?.email || ''}
                onChange={handleChange}
                dataKey={'email'}
            />

            {isChanged && (
                <div className={style.btnWpapper}>
                    <Button className={style.safeBtn} onClick={handleClick}>
                        {'Сохранить'}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
