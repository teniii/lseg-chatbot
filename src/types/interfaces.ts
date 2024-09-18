export interface Question {
  questionId: number;
  text: string;
}

export interface Answer {
  //   answerId: number;
  text: string;
  nextQuestionId: number;
}

export interface BotMessage {
  answers: Answer[];
  question: Question;
}

// The structure of the API response for GET /greeting
export interface GetGreetingResponse {
  question: string;
  answers: string[];
}
