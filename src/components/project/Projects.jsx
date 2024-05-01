import snitchImage from "../../assets/snitch.png";
import buildResume from "../../assets/buildresume.png";
import chatgpt from "../../assets/chatgpt.png";
import Passwordgenerator from "../../assets/passwordgenerator.png";
import todo from "../../assets/todo.png";
import "./Project.css";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const cards = [
    {
      id: 1,
      title: "Snitch Clone",
      thumbnail: snitchImage,
      Demolink: "https://snitch-vert.vercel.app/",
      Githublink: "https://github.com/mohit15-web/Snitch",
    },
    {
      id: 2,
      title: "ChatGPT Clone",
      thumbnail: chatgpt,
      Demolink: "https://chat-gpt-clone-roan.vercel.app/",
    },
    {
      id: 3,
      title: "GroceryBud(Todo)",
      thumbnail: todo,
      Githublink: "https://github.com/mohit15-web/GroceryBud",
      Demolink: "https://grocery-bud-five-dusky.vercel.app/",
    },
    {
      id: 4,
      title: "InterviewReadyWithAI",
      thumbnail: buildResume,
      Githublink: "https://github.com/mohit15-web/InterviewReadywithAI",
      Demolink: "https://mohit15-web.github.io/InterviewReadywithAI/",
    },
    {
      id: 5,
      title: "PasswordGenerator",
      thumbnail: Passwordgenerator,
      Githublink:
        "https://github.com/mohit15-web/ReactProjects/tree/main/PasswordGenerator",
      Demolink: "https://react-projects-11rv.vercel.app/",
    },
  ];

  const openSnitchGithub = (link) => {
    window.open(link, "_blank");
  };

  const openSnitch = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="py-10 w-full cursor-pointer z-100 bg-black">
      <h1 className="text-white text-[4rem] text-center">Projects</h1>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}

