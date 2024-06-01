import classes from "./tehnologies.module.css";

function Tehnilogies() {
  const objAdvanced = [
    {
      firstText: "Html",
      lastText: "Advenced",
      procent: 70,
    },
    {
      firstText: "HCSS, Sass & Bootstraptml",
      lastText: "Advenced",
      procent: 65,
    },
    {
      firstText: "JavaScript, TypeScript, JQuery",
      lastText: "Advenced",
      procent: 50,
    },
  ];
  return (
    <>
      <h1 className={classes["title"]}>Tehnologies</h1>

      <div className={classes["overlayDahboardBlock"]}>
        {objAdvanced.map(({ firstText, lastText, procent }) => {
          return (
            <>
              <div className={classes["advenced"]}>
                <p>{firstText}</p>
                <p>{lastText}</p>
              </div>
              <div className={classes["dashboard"]}>
                <div
                  style={{ width: `${procent}%` }}
                  className={classes["double__dashboard"]}
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Tehnilogies };
