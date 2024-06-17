import snitchImage from "../../assets/snitch.png";
import buildResume from "../../assets/buildresume.png";
import chatgpt from "../../assets/chatgpt.png";
import Passwordgenerator from "../../assets/passwordgenerator.png";
import todo from "../../assets/todo.png";
import { ProjectCard } from "./ProjectCard";
import movieImg from '../../assets/movie.png'
import foodImg from '../../assets/food.png'
export function Projects() {
  const cards = [
    {
      id: 1,
      title: "EatsExpress",
      thumbnail: foodImg,
      Githublink: "https://github.com/mohit15-web/Food-Delivery-Website",
      Demolink: "https://food-delivery-website-sigma-ochre.vercel.app/",
    },
    {
      id: 2,
      title: "MoviesMod",
      thumbnail: movieImg,
      Githublink:
        "https://github.com/mohit15-web/MoviesMod",
      Demolink: "https://movies-mod-navy.vercel.app/",
    },
    {
      id: 3,
      title: "Snitch Clone",
      thumbnail: snitchImage,
      Demolink: "https://snitch-vert.vercel.app/",
      Githublink: "https://github.com/mohit15-web/Snitch",
    },
    {
      id: 4,
      title: "InterviewReadyWithAI",
      thumbnail: buildResume,
      Githublink: "https://github.com/mohit15-web/InterviewReadywithAI",
      Demolink: "https://mohit15-web.github.io/InterviewReadywithAI/",
    },
    {
      id: 3,
      title: "ChatGPT Clone",
      thumbnail: chatgpt,
      Demolink: "https://chat-gpt-clone-roan.vercel.app/",
    },
    
  ];

  const openSnitchGithub = (link) => {
    window.open(link, "_blank");
  };

  const openSnitch = (link) => {
    window.open(link, "_blank");
  };



  return (
    <div
      className="py-10 w-full cursor-pointer z-100 bg-black"
    >
        <h1 className="text-white text-[4rem] text-center">Projects</h1>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}
