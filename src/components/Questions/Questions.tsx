import { type FC } from 'react';
import classNames from 'classnames';

import { QuestionOption } from '@/components/Option';
import { type QuestionType, type OptionType } from '@/types';
import styles from './questions.module.scss';

type QuestionsPropsType = {
  currentQuestion: QuestionType,
  selectOption: (optionId: string) => void,
  wrongOption: string | null,
  correctOptions: string[] | [],
  selectedOption: string | null,
};

const Questions: FC<QuestionsPropsType> = ({
  currentQuestion,
  selectOption,
  wrongOption,
  correctOptions,
  selectedOption,
}) => {
  const optionClass = classNames(styles.questions, {
    [styles.disabled]: selectedOption || correctOptions.length !== 0,

  });

  return (
    <div className={optionClass}>
      {currentQuestion.options.map((option: OptionType) => (
        <QuestionOption
          key={option.id}
          option={option}
          selectOption={selectOption}
          isWrong={wrongOption === option.id}
          // @ts-ignore
          isCorrect={correctOptions.includes(option.id)}
          isSelected={selectedOption === option.id}
        />
      ))}
    </div>
  );
};

export default Questions;
