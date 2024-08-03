import { HoverEffect } from "../../ui/CardHover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-80 xl:mt-32 2xl:mt-2">
      <h1 className="text-white text-[4rem] text-center">Skills</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Html",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg",
  },
  {
    title: "Css",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
  },
  {
    title: "JavaScript",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg",
  },
  {
    title: "React",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
  },
  {
    title: "Express",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/express-original-wordmark.svg",
  },
  {
    title: "MongoDB",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg",
  },
  {
    title: "node.js",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg",
  },
  {
    title: "Typescript",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg",
  },
  {
    title: "Tailwind",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
  },

  {
    title: "Git",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg",
  },

  {
    title: "Java",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/java-original.svg",
  },

  {
    title: "Firebase",
    link: "https://imgs.search.brave.com/Rt7274I9pYiuAKtGuRuv7yYFo0b4DE7bhJRAv4UIxmc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmlyZWJh/c2UtbG9nby00MDJG/NDA3RUUwLXNlZWts/b2dvLmNvbS5wbmc",
  },
];
