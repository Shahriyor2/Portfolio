import { Link } from "react-router-dom";
import classes from "./pagenotfound.module.scss";

const PageNotFound = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["container__box"]}>
        <h1> 404</h1>
        <p>
          Страничка не найдена. <br /> Верниетсь назад и продолжите свои
          действия
        </p>
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
