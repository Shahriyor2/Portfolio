import { useEffect } from "react";
import { Lorem } from "./Components/Lorem/Lorem";
import { NavbarView } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import classes from "./index..module.css";
import { Tehnilogies } from "./Components/Technologies/Tehnilogies";

const App = () => {
  useEffect(() => {
    window.scroll({ top: "10px" });
  }, []);

  return (
    <div className={classes["container"]}>
      <NavbarView />
      <Lorem />
      <div id="projects">
        <Projects />
      </div>
      <div id="tehnologies">
        <Tehnilogies />
      </div>
    </div>
  );
};

export default App;
