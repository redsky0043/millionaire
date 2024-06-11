import { FC } from 'react';
import classNames from 'classnames';

import { OptionType } from '@/types';
import { QuestionOptionIcon } from '@/components/Icons';
import styles from './option.module.scss';

type QuestionOptionType = {
  option: OptionType;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  selectOption: (id: string) => void;
};

const QuestionOption: FC<QuestionOptionType> = ({
  option,
  selectOption,
  isSelected,
  isCorrect,
  isWrong,
}) => {
  const optionClass = classNames(styles.option, {
    [styles.selected]: isSelected,
    [styles.correct]: isCorrect,
    [styles.wrong]: isWrong,
  });

  return (
    <button className={optionClass} onClick={() => selectOption(option.id)}>
      <div className={styles.wrapper}>
        <QuestionOptionIcon />
        <p className={styles.text}>
          <span className={styles.key}>
            {option.id}
          </span>
          {option.value}
        </p>
      </div>
    </button>
  );
};

export default QuestionOption;
