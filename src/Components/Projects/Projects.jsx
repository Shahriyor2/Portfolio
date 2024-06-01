import classes from "./project.module.css";
import img1 from "../../assets/projectImg/Снимок экрана 2024-05-19 014907.png";

function Projects() {
  const projectBlockObj = [
    {
      title: "PROJECT 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inaperiam, ab exercitationem, dignissimos laborum!",
      src: img1,
      alt: "1-ый",
      href: "https://www.figma.com/design/OEGjuhIeRNR5b94Exz3Zay/React-Pizza-(Copy)?node-id=0-1&t=q3KB5gtulq9j60KF-0",
    },
    {
      title: "PROJECT 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inaperiam, ab exercitationem",
      src: img1,
      alt: "2-ой",
      href: "https://www.figma.com/design/OEGjuhIeRNR5b94Exz3Zay/React-Pizza-(Copy)?node-id=0-1&t=q3KB5gtulq9j60KF-0",
    },
    {
      title: "PROJECT 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inaperiam, ab exercitationem",
      src: img1,
      alt: "2-ой",
      href: "https://www.figma.com/design/OEGjuhIeRNR5b94Exz3Zay/React-Pizza-(Copy)?node-id=0-1&t=q3KB5gtulq9j60KF-0",
    },
  ];

  return (
    <>
      <h1 className={classes["title"]}>Projects</h1>

      <div className={classes["overlay"]}>
        {projectBlockObj.map(({ src, href, title, text, alt }) => {
          return (
            <>
              <div className={classes["projectBlock"]}>
                <img src={src} alt={alt} />
                <div className={classes["projectBlock__titleBlock"]}>
                  <h1 className={classes["projectBlock__title"]}>
                    {title}
                    <hr className={classes["projectBlock__hr"]} />
                  </h1>
                  <p>{text}</p>
                  <button>
                    <a href={href}>Look it up</a>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Projects };
