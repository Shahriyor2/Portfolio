import classes from "./lorem.module.css";

function Lorem() {
  return (
    <div className={classes.overlay}>
      <div className={classes.loremBlock}>
        <h1 className={classes.titleLorem}>Lorem ipsum dolor sit amet</h1>
        <p className={classes.textLorem}>
          consectetur adipisicing elit. Ratione, numquam rem vitae incidunt,
          dolor quidem nobis corporis velit laborum blanditiis quibusdam id.
          Minus doloribus similique, rem tenetur cupiditate voluptatum
          aspernatur.
        </p>
        <button className={classes.btn}>
          <i className={classes.animation}></i>Let’s begin
          <i className={classes.animation}></i>
        </button>
      </div>

      <div className={classes.avatarBlock}>
        <img src="/src/assets/drawing.svg" alt="" />
      </div>
    </div>
  );
}

export { Lorem };
