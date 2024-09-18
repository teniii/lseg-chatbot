import { useCallback, useEffect, useState } from "react";
import { API_CONSTANTS } from "../constants";
import { Answer, BotMessage, Question } from "../types/interfaces";

// Custom hook used for handling API requests to our local backend
const useChatHandling = () => {
  const [greeting, setGreeting] = useState<string>();
  const [firstBotMessage, setFirstBotMessage] = useState<BotMessage>();

  // Fetch the next question based on the current questionId and answer
  const getNextQuestion = useCallback(
    async (questionId: number, answer: string) => {
      try {
        const response = await fetch(
          `${API_CONSTANTS.LOCAL_API_BASE_URL}/next-chat`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ questionId, answer }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch next question");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching next question:", error);
        throw error;
      }
    },
    []
  );

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch(
          `${API_CONSTANTS.LOCAL_API_BASE_URL}/greeting`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch greeting");
        }

        const data = await response.json();
        setGreeting(data.message);
      } catch (error) {
        console.error("Error fetching greeting:", error);
        throw error;
      }
    };

    fetchGreeting();
  }, []);

  useEffect(() => {
    const fetchFirstQuestion = async () => {
      try {
        const response = await fetch(
          `${API_CONSTANTS.LOCAL_API_BASE_URL}/next-chat`,
          {
            method: "POST",
            body: JSON.stringify({ questionId: 0 }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch greeting");
        }

        const data = await response.json();
        setFirstBotMessage(data);
      } catch (error) {
        console.error("Error fetching greeting:", error);
        throw error;
      }
    };

    fetchFirstQuestion();
  }, []);

  return { greeting, firstBotMessage, getNextQuestion };
};

export default useChatHandling;
