import { type FC } from 'react';
import classNames from 'classnames';

import { PriseOption } from '@/components/Option';
import styles from './sideMenu.module.scss';

type SideMenuPropsType = {
  isOpen: boolean,
  prizes: string[],
  curQuestionIndex: number,
};

const SideMenu: FC<SideMenuPropsType> = ({ isOpen, prizes, curQuestionIndex }) => {
  const buttonClass = classNames(styles.sideMenu, {
    [styles.open]: isOpen,
  });

  const prizesLength = prizes.length - 1;

  return (
    <aside className={buttonClass}>
      {prizes.toReversed().map((prise, index) => (
        <PriseOption
          key={prise}
          value={prise}
          isCurrent={curQuestionIndex === prizesLength - index}
          isPassed={curQuestionIndex > prizesLength - index}
        />
      ))}
    </aside>
  );
};

export default SideMenu;
