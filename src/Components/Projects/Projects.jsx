import classes from "./project.module.css";

function Projects() {
  // const projectBlockObj = [
  //   {
  //     title: "PROJECT 1",
  //     href: "https://www.figma.com/design/OEGjuhIeRNR5b94Exz3Zay/React-Pizza-(Copy)?node-id=0-1&t=q3KB5gtulq9j60KF-0",
  //   },
  // ];
  return (
    <>
      <h1 className={classes["title"]}>Projects</h1>
      <div className={classes["Block"]}>
        <div className={classes["projectBlock"]}>
          <img
            src="/src/assets/projectImg/Снимок экрана 2024-05-19 014907.png"
            alt="fisrt-img"
          />
          <div className={classes["projectBlock__titleBlock"]}>
            <h1 className={classes["projectBlock__title"]}>
              PROJECT 1
              <hr className={classes["projectBlock__hr"]} />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in
              aperiam, ab exercitationem, dignissimos laborum!
            </p>
            <button>
              <a to="https://www.figma.com/design/OEGjuhIeRNR5b94Exz3Zay/React-Pizza-(Copy)?node-id=0-1&t=q3KB5gtulq9j60KF-0">
                Look it up
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Projects };
