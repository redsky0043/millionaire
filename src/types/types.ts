export type OptionType = {
    id: string,
    value: string,
};

export type QuestionType = {
    question: string,
    options: OptionType[],
    answer: string,
};