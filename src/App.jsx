import { useEffect } from "react";
import { Projects } from "./components/project/Projects";
import { cursorJs } from "./components/cursor/cursorJs";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import ProfileSection from "./components/profile/Profile";
import { CardHoverEffectDemo } from "./components/skills/CardHoverEffectDemo";
import Footer from "./components/footer/Footer";
import { ProjectCard } from "./components/project/ProjectCard";
function App() {
  useEffect(() => {
    cursorJs();
  }, []);
  return (
    <div className="container bg-black">
      <Cursor />
      <Navbar />
      <ProfileSection/>
      <CardHoverEffectDemo/>
      <Projects />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
