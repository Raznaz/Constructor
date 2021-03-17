import image from "../assets/kaan.jpg";

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на чистом Java Script",
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
  { type: "text", value: "here we go with some text" },
  {
    type: "columns",
    value: ["11111111", "22222222", "3333333333"],
  },
  { type: "image", value: image },
];
