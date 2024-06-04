import { type FC, type ReactNode } from 'react';

import styles from "./button.module.scss";

type ButtonPropsType = {
    children: ReactNode,
}

export const Button: FC<ButtonPropsType> = ({ children }) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
};
