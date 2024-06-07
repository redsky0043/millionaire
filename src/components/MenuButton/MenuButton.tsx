import { type FC } from 'react'
import classNames from "classnames";

import styles from './menuButton.module.scss';

type MenuButtonPropsType = {
    isOpen: boolean,
    className?: string,
    toggleModal: () => void,
}

const MenuButton: FC<MenuButtonPropsType> = ({
    isOpen,
    toggleModal,
    className
}) => {
    const buttonClass = classNames(styles.menuButton, className, {
        [styles.open]: isOpen,
    });

    return (
        <button className={buttonClass} onClick={toggleModal}>
            <span />
        </button>
    );
};

export default MenuButton;
