import { type QuestionType } from "@/types";

export function getRandomQuestions(questions: QuestionType[], amount: number = 12): QuestionType[] {
    const shuffled = questions.toSorted(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
}