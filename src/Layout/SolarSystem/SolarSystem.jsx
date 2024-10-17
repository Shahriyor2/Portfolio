import RotateCarts from "./RotateCarts";
import classes from "./solarsystem.module.scss";

const SolarSystem = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div className={classes["solarsystem-container"]}>
        {/* заголовок */}
        <div className={classes["content"]}>
          <h1>SOLAR SYSTEM</h1>

          <div className={classes["content__hr"]}>
            <hr />
          </div>

          {/* <div className={classes["solarsystem-content__text"]}> */}
          <p>
            We made our system in modularity, it is easy for our customers to
            maintain the system and it is easy for us to offer the best after
            sales service.
          </p>
          {/* </div> */}
        </div>
      </div>
      <RotateCarts />
    </div>
  );
};

export default SolarSystem;
