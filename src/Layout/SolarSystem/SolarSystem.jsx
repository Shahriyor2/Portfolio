import RotateCarts from "./RotateCarts";
import classes from "./solarsystem.module.scss";

const SolarSystem = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div className={classes["solarsystem-container"]}>
        {/* заголовок */}
        <div className={classes["content"]}>
          <h1>СОЛНЕЧНАЯ СИСТЕМА</h1>

          <div className={classes["content__hr"]}>
            <hr />
          </div>

          {/* <div className={classes["solarsystem-content__text"]}> */}
          <p>
            Мы создали нашу систему модульной, что позволяет нашим клиентам
            легко обслуживать систему и нам легко предоставлять лучший сервис
            после продажи.
          </p>
          {/* </div> */}
        </div>
      </div>
      <RotateCarts />
    </div>
  );
};

export default SolarSystem;
