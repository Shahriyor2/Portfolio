import { Lorem } from "./Components/Lorem/Lorem";
import { NavbarView } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import classes from "./index..module.css";

const App = () => {
  return (
    <div className={classes["container"]}>
      <NavbarView />
      <Lorem />
      <Projects />
    </div>
  );
};

export default App;
