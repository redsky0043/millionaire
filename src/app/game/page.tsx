'use client'
import { useState } from 'react';

import styles from './game.module.scss'
import { questions } from '../../../public/questions.json'
import { Option } from "@/components/Option";

const Game = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [correctOption, setCorrectOption] = useState<string | null>(null);
    const [wrongOption, setWrongOption] = useState<string | null>(null);
    const curQuestion = questions[0]

    const handleSelectOption = (optionId: string) => {
        setSelectedOption(optionId);
        if (optionId === curQuestion.answer) {
            setCorrectOption(optionId);
            setWrongOption(null);
        } else {
            setWrongOption(optionId);
            setCorrectOption(curQuestion.answer);
        }
    };
    
    return (
        <main className={styles.gamePage}>
            <p className={styles.question}>
                {curQuestion.question}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                {curQuestion.options.map((option) => (
                    <Option
                        key={option.id}
                        option={option}
                        selectOption={handleSelectOption}
                        isWrong={wrongOption === option.id}
                        isCorrect={correctOption === option.id}
                        isSelected={selectedOption === option.id}
                    />
                ))}
            </div>
        </main>
    );
};

export default Game;
