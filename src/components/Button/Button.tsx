import React from 'react';

interface IProps {
    onClick: (event: any) => void;
    children: string;
    className: string;
}

const Button: React.FC<IProps> = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
