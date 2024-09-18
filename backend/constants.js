const GREETING = "Hello! Welcome to LSEG";
const QUESTIONS = {
  1: {
    text: "Please select a Stock Exchange.",
    answers: [
      { code: "LSE", text: "London Stock Exchange", nextQuestionId: 2 },
      { code: "NYSE", text: "New York Stock Exchange", nextQuestionId: 3 },
      { code: "NASDAQ", text: "Nasdaq", nextQuestionId: 4 },
    ],
  },
  2: {
    text: "Please select a stock",
    answers: [
      { text: "CRODA INTERNATIONAL PLC", nextQuestionId: 5 },
      { text: "GSK PLC", nextQuestionId: 6 },
      { text: "ANTOFAGASTA PLC", nextQuestionId: 7 },
      { text: "FLUTTER ENTERTAINMENT PLC", nextQuestionId: 8 },
      { text: "BARRATT DEVELOPMENTS PLC", nextQuestionId: 9 },
    ],
  },
  3: {
    text: "Please select a stock",
    answers: [
      { text: "Ashford Hospitality Trust", nextQuestionId: 10 },
      { text: "Kuke Music Holding Ltd", nextQuestionId: 11 },
      { text: "Ashland Inc.", nextQuestionId: 12 },
      { text: "Nomura Holdings Inc.", nextQuestionId: 13 },
      { text: "LendingClub Corp", nextQuestionId: 14 },
    ],
  },
  4: {
    text: "Please select a stock",
    answers: [
      { text: "Advanced Micro Devices, Inc.", nextQuestionId: 15 },
      { text: "Tesla, Inc.", nextQuestionId: 16 },
      { text: "SoFi Technologies, Inc.", nextQuestionId: 17 },
      { text: "Paramount Global", nextQuestionId: 18 },
      { text: "Alphabet Inc.", nextQuestionId: 19 },
    ],
  },
  5: {
    text: "Stock Price of  is . Please select an option",
    answers: [{ text: "FLUTTER ENTERTAINMENT PLC", nextQuestionId: 5 }],
  },
  6: {
    text: "Please select a stock",
    answers: [{ text: "BARRATT DEVELOPMENTS PLC", nextQuestionId: 5 }],
  },
  7: {
    text: "Please select a stock",
    answers: [{ text: "Ashford Hospitality Trust", nextQuestionId: 5 }],
  },
  7: {
    text: "Please select a stock",
    answers: [{ text: "Kuke Music Holding Ltd", nextQuestionId: 5 }],
  },
  8: {
    text: "Please select a stock",
    answers: [{ text: "Ashland Inc.", nextQuestionId: 5 }],
  },
  9: {
    text: "Please select a stock",
    answers: [{ text: "Nomura Holdings Inc.", nextQuestionId: 5 }],
  },
  10: {
    text: "Please select a stock",
    answers: [{ text: "LendingClub Corp", nextQuestionId: 5 }],
  },
  11: {
    text: "Please select a stock",
    answers: [{ text: "Advanced Micro Devices, Inc.", nextQuestionId: 5 }],
  },
  12: {
    text: "Please select a stock",
    answers: [{ text: "Tesla, Inc.", nextQuestionId: 5 }],
  },
  13: {
    text: "Please select a stock",
    answers: [{ text: "SoFi Technologies, Inc.", nextQuestionId: 5 }],
  },
  14: {
    text: "Please select a stock",
    answers: [{ text: "Paramount Global", nextQuestionId: 5 }],
  },
  15: {
    text: "Please select a stock",
    answers: [{ text: "Alphabet Inc.", nextQuestionId: 5 }],
  },
};

const STOCKS = [
  {
    code: "LSE",
    stockExchange: "London Stock Exchange",
    topStocks: [
      {
        code: "CRDA",
        stockName: "CRODA INTERNATIONAL PLC",
        price: 4807.0,
      },
      {
        code: "GSK",
        stockName: "GSK PLC",
        price: 1574.8,
      },
      {
        code: "ANTO",
        stockName: "ANTOFAGASTA PLC",
        price: 1746.0,
      },
      {
        code: "FLTR",
        stockName: "FLUTTER ENTERTAINMENT PLC",
        price: 16340.0,
      },
      {
        code: "BDEV",
        stockName: "BARRATT DEVELOPMENTS PLC",
        price: 542.6,
      },
    ],
  },
  {
    code: "NYSE",
    stockExchange: "New York Stock Exchange",
    topStocks: [
      {
        code: "AHT",
        stockName: "Ashford Hospitality Trust",
        price: 1.72,
      },
      {
        code: "KUKE",
        stockName: "Kuke Music Holding Ltd",
        price: 1.2,
      },
      {
        code: "ASH",
        stockName: "Ashland Inc.",
        price: 93.42,
      },
      {
        code: "NMR",
        stockName: "Nomura Holdings Inc.",
        price: 5.84,
      },
      {
        code: "LC",
        stockName: "LendingClub Corp",
        price: 9.71,
      },
    ],
  },
  {
    code: "NASDAQ",
    stockExchange: "Nasdaq",
    topStocks: [
      {
        code: "AMD",
        stockName: "Advanced Micro Devices, Inc.",
        price: 164.21,
      },
      {
        code: "TSLA",
        stockName: "Tesla, Inc.",
        price: 190.35,
      },
      {
        code: "SOFI",
        stockName: "SoFi Technologies, Inc.",
        price: 8.24,
      },
      {
        code: "PARA",
        stockName: "Paramount Global",
        price: 14.92,
      },
      {
        code: "GOOGL",
        stockName: "Alphabet Inc.",
        price: 141.91,
      },
    ],
  },
];

const PROCESSED_STOCKS = [
  {
    code: "CRDA",
    stockName: "CRODA INTERNATIONAL PLC",
    price: 4807,
  },
  {
    code: "GSK",
    stockName: "GSK PLC",
    price: 1574.8,
  },
  {
    code: "ANTO",
    stockName: "ANTOFAGASTA PLC",
    price: 1746,
  },
  {
    code: "FLTR",
    stockName: "FLUTTER ENTERTAINMENT PLC",
    price: 16340,
  },
  {
    code: "BDEV",
    stockName: "BARRATT DEVELOPMENTS PLC",
    price: 542.6,
  },
  {
    code: "AHT",
    stockName: "Ashford Hospitality Trust",
    price: 1.72,
  },
  {
    code: "KUKE",
    stockName: "Kuke Music Holding Ltd",
    price: 1.2,
  },
  {
    code: "ASH",
    stockName: "Ashland Inc.",
    price: 93.42,
  },
  {
    code: "NMR",
    stockName: "Nomura Holdings Inc.",
    price: 5.84,
  },
  {
    code: "LC",
    stockName: "LendingClub Corp",
    price: 9.71,
  },
  {
    code: "AMD",
    stockName: "Advanced Micro Devices, Inc.",
    price: 164.21,
  },
  {
    code: "TSLA",
    stockName: "Tesla, Inc.",
    price: 190.35,
  },
  {
    code: "SOFI",
    stockName: "SoFi Technologies, Inc.",
    price: 8.24,
  },
  {
    code: "PARA",
    stockName: "Paramount Global",
    price: 14.92,
  },
  {
    code: "GOOGL",
    stockName: "Alphabet Inc.",
    price: 141.91,
  },
];

exports.GREETING = GREETING;
exports.QUESTIONS = QUESTIONS;
