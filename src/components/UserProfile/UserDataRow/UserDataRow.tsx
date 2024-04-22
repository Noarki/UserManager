import React from 'react';
import style from './UserDataRow.module.scss';

interface Iprops {
    userInfo: string | number | undefined;
    headerText: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    dataKey: string;
}

const UserDataRow: React.FC<Iprops> = ({ userInfo, headerText, onChange, dataKey }) => {
    const handleChange = (e: any) => onChange(e, dataKey);

    return (
        <div className={style.userProfileWrapper}>
            <p className={style.headerText}>{headerText}</p>
            <input className={style.inp} onChange={handleChange} value={userInfo}></input>
        </div>
    );
};

export default UserDataRow;
