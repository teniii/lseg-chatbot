// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const {GREETING, QUESTIONS} = require('./constants')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/greeting', (_req, res) => {
    if(!GREETING){
        return res.status(404).json({errorMessage: 'Greeting not found'})
    }
    return res.json({message: GREETING})
})

app.post('/next-chat', (req, res) => {
    const { questionId, answer } = req.body;
    const currentQuestion = QUESTIONS.find(q => q.id === questionId);

    if (!currentQuestion) {
        return res.status(404).json({ errorMessage: 'Invalid question!' });
    }

    const selectedAnswer = currentQuestion.answers.find(a => a.text === answer);
    if (!selectedAnswer) {
        return res.status(400).json({ errorMessage: 'Invalid answer!' });
    }

    const nextQuestion = QUESTIONS.find(q => q.id === selectedAnswer.nextQuestionId);
    if (nextQuestion) {
        res.json({ question: nextQuestion.question, answers: nextQuestion.answers });
    } else {
        res.json({ message: "That's a wrap! Thank you and have a nice day!" });
    }
});

app.listen(port, () => {
    console.log(`Chatbot server running on http://localhost:${port}`);
});