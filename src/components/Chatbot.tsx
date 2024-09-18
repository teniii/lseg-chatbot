import React, { useEffect, useState } from "react";
import { Button, Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import spacing from "../utils/spacing";
import useChatHandling from "../hooks/useChatHandling";
import { Answer } from "../types/interfaces";

interface Message {
  type: "user" | "bot" | "bot-answer";
  text: string;
  nextQuestionId?: number;
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const { greeting, firstBotMessage, getNextQuestion } = useChatHandling();

  useEffect(() => {
    if (greeting) {
      setMessages((m) => [...m, { type: "bot", text: greeting }]);
    }
  }, [greeting]);

  console.log(" == first bot message: ", firstBotMessage);

  useEffect(() => {
    console.log("!=!=!=! First bot message: ", firstBotMessage);
    if (firstBotMessage)
      setMessages((m) => [
        ...m,
        { type: "bot", text: firstBotMessage.question.text },
        ...firstBotMessage.answers.map(
          (i) =>
            ({
              type: "bot-answer",
              text: i.text,
              nextQuestionId: i.nextQuestionId,
            } as Message)
        ),
      ]);
  }, [firstBotMessage]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages([
          ...messages,
          { type: "user", text: input },
          { type: "bot", text: "I am a bot response" },
        ]);
      }, 500);
    }
  };

  const onAnswerClick = async (answer: Answer) => {
    setMessages([...messages, { type: "user", text: answer.text }]);
    const nextQuestion = await getNextQuestion(
      answer.nextQuestionId,
      answer.text
    );
    setMessages([
      ...messages,
      { type: "bot", text: nextQuestion.question.text },
      {
        ...nextQuestion.answers.map(
          (a: Answer) =>
            ({
              type: "bot-answer",
              text: a.text,
              nextQuestionId: a.nextQuestionId,
            } as Message)
        ),
      },
    ]);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 999 }}>
      {isOpen ? (
        <Paper
          elevation={3}
          sx={{
            width: 600,
            height: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              backgroundColor: "teal",
              padding: 1,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box marginRight={spacing.xxxs}>
                <SmartToyIcon fontSize="large" />
              </Box>
              <Typography
                variant="h6"
                alignContent={"center"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                LSEG Chatbot
              </Typography>
            </Box>
            <IconButton size="small" onClick={toggleChat}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Chat Body */}
          <Box sx={{ flexGrow: 1, padding: 2, overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <Box
                key={idx}
                width="60%"
                {...(msg.type === "bot-answer" && {
                  bgcolor: "aquamarine",
                  borderRadius: spacing.xxxs,
                  marginTop: "1px",
                  marginLeft: spacing.xxs,
                  onClick: () =>
                    onAnswerClick({
                      nextQuestionId: msg.nextQuestionId!,
                      text: msg.text,
                    }),
                })}
                bgcolor={msg.type === "bot-answer" ? "aquamarine" : undefined}
              >
                <Typography align={msg.type === "user" ? "right" : "left"}>
                  <strong>{msg.type === "bot" && "Bot:"}</strong> {msg.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              display: "flex",
              padding: 1,
              borderTop: "1px solid #ddd",
              outline: 1,
              outlineColor: "gray",
              bgcolor: "silver",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled
              placeholder="Please pick an option."
              style={{
                flexGrow: 1,
                padding: 8,
                border: "none",
                outline: "none",
              }}
            />
            <IconButton onClick={handleSend}>
              <SendIcon htmlColor="#ccc" />
            </IconButton>
          </Box>
        </Paper>
      ) : (
        <Button
          variant="contained"
          onClick={toggleChat}
          sx={{ borderRadius: "50%", width: spacing.xl, height: spacing.xl }}
        >
          <SmartToyIcon fontSize="large" />
        </Button>
      )}
    </Box>
  );
}

export default Chatbot;
