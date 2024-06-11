import { FC } from 'react';
import classNames from 'classnames';

import { PriseOptionIcon } from '@/components/Icons';
import styles from './option.module.scss';

type PriseOptionPropsType = {
  value: string,
  isPassed: boolean,
  isCurrent: boolean,
};

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
        <PriseOptionIcon />
        <p className={styles.text}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default PriseOption;
