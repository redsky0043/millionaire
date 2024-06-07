import { type FC } from 'react'
import classNames from "classnames";

import styles from "./questions.module.scss";
import { QuestionOption } from "@/components/Option";
import { type OptionType, type QuestionType } from "@/types";

type QuestionsPropsType = {
    currentQuestion: QuestionType,
    selectOption: (optionId: string) => void,
    wrongOption: string | null,
    correctOption: string | null,
    selectedOption: string | null,
}

const Questions: FC<QuestionsPropsType> = ({
   currentQuestion,
   selectOption,
   wrongOption,
   correctOption,
   selectedOption,
}) => {
    const optionClass = classNames(styles.questions, {
        [styles.disabled]: selectedOption || correctOption,
    });

    return (
        <div className={optionClass}>
            {currentQuestion.options.map((option: OptionType) => (
                <QuestionOption
                    key={option.id}
                    option={option}
                    selectOption={selectOption}
                    isWrong={wrongOption === option.id}
                    isCorrect={correctOption === option.id}
                    isSelected={selectedOption === option.id}
                />
            ))}
        </div>
    );
};

export default Questions;
