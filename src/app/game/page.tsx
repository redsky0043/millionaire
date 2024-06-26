'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/common/routes';
import { Questions } from '@/components/Questions';
import { MenuButton } from '@/components/MenuButton';
import { SideMenu } from '@/components/SideMenu';
import { getRandomQuestions } from '@/utils/generateRandomQuestion';
import styles from './game.module.scss';
import {
  questions, prizes, QUESTION_DELAY, NEXT_QUESTION_DELAY,
} from '../../../public/questions.json';

const randomQuestions = getRandomQuestions(questions, 12);

function Game() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctOptions, setCorrectOptions] = useState<string[] | []>([]);
  const [wrongOption, setWrongOption] = useState<string | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleToggleModal = () => setIsOpenModal((state) => !state);

  const currentQuestion = randomQuestions[currentQuestionIndex];

  const setNextQuestion = () => {
    setCorrectOptions([]);
    setCurrentQuestionIndex((prevState) => prevState + 1);
  };

  const navigateToResult = () => {
    router.push(`${ROUTES.RESULT}/${currentQuestionIndex + 1}`);
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);

    setTimeout(() => {
      if (currentQuestion.answer.includes(optionId)) {
        setCorrectOptions([optionId]);
        setWrongOption(null);
        setSelectedOption(null);

        if (currentQuestionIndex < randomQuestions.length - 1) {
          setTimeout(setNextQuestion, NEXT_QUESTION_DELAY);
        } else {
          navigateToResult();
        }
      } else {
        setSelectedOption(null);
        setWrongOption(optionId);
        setCorrectOptions(currentQuestion.answer);

        setTimeout(navigateToResult, NEXT_QUESTION_DELAY);
      }
    }, QUESTION_DELAY);
  };

  return (
    <main className={styles.gamePage}>
      <MenuButton
        className={styles.hamburger}
        isOpen={isOpenModal}
        toggleModal={handleToggleModal}
      />
      <SideMenu
        prizes={prizes}
        isOpen={isOpenModal}
        currentQuestionIndex={currentQuestionIndex}
      />
      <p className={styles.text}>
        {currentQuestion?.question}
      </p>
      <Questions
        wrongOption={wrongOption}
        currentQuestion={currentQuestion}
        correctOptions={correctOptions}
        selectedOption={selectedOption}
        selectOption={handleSelectOption}
      />
    </main>
  );
}

export default Game;
