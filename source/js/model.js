import image from "../assets/kaan.jpg";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "../classes/blocks";

const text = `
Код проекта можно посмотреть тут: <a href="https://github.com/Raznaz/Constructor" target="_blank">https://github.com/Raznaz/Constructor</a>
`;

export const model = [
  new TitleBlock("Конструктор сайтa на чистом Javascript.", {
    tag: "h1",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
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
  }),
  new ColumnsBlock(
    [
      "Использовались принципы SOLID и ООП",
      "Код написан на чистом javascript, без использования библиотек",
      "Собран сборщиком Parcel и залит на хостинг Firebase",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #4de, #4a03d9)",
        "border-radius": "40px",
        "box-shadow": "10px -10px 20px #ccc",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #fff)",
      "border-radius": "40px",
      padding: "2rem",
      margin: "1rem",
      "font-weight": "bold",
    },
  }),
];
