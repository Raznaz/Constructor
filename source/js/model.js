import image from "../assets/kaan.jpg";

const text = `
Крутые видео тут: <a href="https://www.youtube.com/watch?v=mPZkdNFkNps&ab_channel=RelaxingAmbienceASMR " target="_blank">Природа</a>
`;

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на чистом Java Script.",
    options: {
      tag: "h1",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        padding: "1.5rem",
        "text-align": "center",
      },
    },
  },

  {
    type: "image",
    value: image,
    options: {
      styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center",
      },
      imageStyles: {
        width: "500px",
        alt: "Шоу Каан",
        height: "auto",
      },
    },
  },
  {
    type: "columns",
    value: [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
      "JavaScript - это просто, интересно. Научсь создавать любые UI своими руками",
      "все в твоих руках",
    ],
    options: {
      styles: {
        background: "linear-gradient(to bottom, #4de, #4a03d9)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    },
  },
  {
    type: "text",
    value: text,
    options: {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #fff)",
        padding: "2rem",
        "font-weight": "bold",
      },
    },
  },
];
