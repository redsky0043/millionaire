'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/common/routes'
import styles from './game.module.scss'
import { Questions } from "@/components/Questions";
import { MenuButton } from "@/components/MenuButton";
import { SideMenu } from "@/components/SideMenu";
import { getRandomQuestions } from "@/utils/generateRandomQuestion";
import { questions, prizes, QUESTION_DELAY, NEXT_QUESTION_DELAY } from '../../../public/questions.json'

const randomQuestions = getRandomQuestions(questions, 12)

const Game = () => {
    const router = useRouter()
    const [isOpenModal, setIsOpenModal] = useState(false)

    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [correctOption, setCorrectOption] = useState<string | null>(null)
    const [wrongOption, setWrongOption] = useState<string | null>(null)

    const [curQuestionIndex, setCurQuestionIndex] = useState<number>(0)

    const handleToggleModal = () => setIsOpenModal(state => !state)

    const curQuestion = randomQuestions[curQuestionIndex]

    const setNextQuestion = () => {
        setCorrectOption(null)
        setCurQuestionIndex(prevState => prevState + 1)
    }

    const handleSelectOption = (optionId: string) => {
        setSelectedOption(optionId);

        setTimeout(() => {
            if (optionId === curQuestion.answer) {
                setCorrectOption(optionId)
                setWrongOption(null)
                setSelectedOption(null)

                if (curQuestionIndex < randomQuestions.length - 1) {
                    setTimeout(setNextQuestion, NEXT_QUESTION_DELAY);
                } else {
                    router.push( `${ROUTES.RESULT}/${curQuestionIndex}`);
                }
            } else {
                setSelectedOption(null)
                setWrongOption(optionId);
                setCorrectOption(curQuestion.answer);

                setTimeout(() => {
                    router.push( `${ROUTES.RESULT}/${curQuestionIndex}`);
                }, NEXT_QUESTION_DELAY)
            }
        }, QUESTION_DELAY)
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
                curQuestionIndex={curQuestionIndex}
            />
            <p className={styles.text}>
                {curQuestion?.question}
            </p>
            <Questions
                currentQuestion={curQuestion}
                wrongOption={wrongOption}
                correctOption={correctOption}
                selectedOption={selectedOption}
                selectOption={handleSelectOption}
            />
        </main>
    );
};

export default Game;
