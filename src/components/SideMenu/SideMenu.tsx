import { type FC } from 'react';
import classNames from 'classnames';

import { PriseOption } from '@/components/Option';
import styles from './sideMenu.module.scss';

type SideMenuPropsType = {
  isOpen: boolean,
  prizes: string[],
  currentQuestionIndex: number,
};

const SideMenu: FC<SideMenuPropsType> = ({ isOpen, prizes, currentQuestionIndex }) => {
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
          isCurrent={currentQuestionIndex === prizesLength - index}
          isPassed={currentQuestionIndex > prizesLength - index}
        />
      ))}
    </aside>
  );
};

export default SideMenu;
