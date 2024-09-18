// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const { GREETING, QUESTIONS } = require("./constants");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fix CORS requests
app.use(cors());

app.get("/greeting", (_req, res) => {
  console.log(" Piu piu! The greeting: ", GREETING, "!");
  if (!GREETING) {
    return res
      .status(404)
      .json({ error: { message: "Greeting not found", code: 404 } });
  }
  return res.json({ message: GREETING });
});

app.post("/next-chat", (req, res) => {
  const { questionId, answer } = req.body;

  if (questionId === 0) {
    return res.json({
      question: { text: QUESTIONS[1].text, questionId: 1 },
      answers: QUESTIONS[1].answers,
    });
  }
  const currentQuestion = QUESTIONS[questionId];

  if (!currentQuestion) {
    return res
      .status(404)
      .json({ error: { message: "Invalid question!", code: 404 } });
  }

  const selectedAnswer = currentQuestion.answers.find((a) => a.text === answer);
  if (!selectedAnswer && questionId > 0) {
    return res
      .status(404)
      .json({ error: { message: "Invalid answer!", code: 404 } });
  }

  const nextQuestion = QUESTIONS[selectedAnswer.nextQuestionId];

  if (nextQuestion) {
    res.json({
      question: {
        text: nextQuestion.text,
        questionId: selectedAnswer.nextQuestionId,
      },
      answers: nextQuestion.answers,
    });
  } else {
    res.json({ message: "That's a wrap! Thank you and have a nice day!" });
  }
});

app.listen(port, () => {
  console.log(`Chatbot server running on http://localhost:${port}`);
});
