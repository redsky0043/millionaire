import { FC } from 'react'
import classNames from 'classnames'

import styles from './option.module.scss'

type PriseOptionPropsType = {
    value: string,
    isPassed: boolean,
    isCurrent: boolean,
}

const PriseOption: FC<PriseOptionPropsType> = ({
    value,
    isCurrent,
    isPassed,
}) => {
    const optionClass = classNames(styles.option, styles.prise, {
        [styles.current]: isCurrent,
        [styles.passed]: isPassed,
    });

    return (
        <div className={optionClass}>
            <div className={styles.wrapper}>
                <svg viewBox="0 0 240 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z"/>
                </svg>

                <p className={styles.text}>
                    {value}
                </p>
            </div>
        </div>
    );
};

export default PriseOption;
