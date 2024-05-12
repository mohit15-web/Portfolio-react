import snitchImage from "../../assets/snitch.png";
import buildResume from "../../assets/buildresume.png";
import chatgpt from "../../assets/chatgpt.png";
import Passwordgenerator from "../../assets/passwordgenerator.png";
import todo from "../../assets/todo.png";
import { ProjectCard } from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="py-10 w-full cursor-pointer z-100 bg-black"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <h1 className="text-white text-[4rem] text-center">Projects</h1>
      </motion.div>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}
