import classes from "./header.module.css";

function NavbarView() {
  return (
    <div className={classes["containerBlock"]}>
      {/* logo */}
      <div className={classes["headerLogo"]}>
        <img src="/src/assets/logo.svg" alt="Logo" />
        <p>Portfolio</p>
      </div>

      <div>
        <ul className={classes["aboutMe"]}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tehnologies">Tehnologies</a>
          </li>
          <li>About me</li>
        </ul>
      </div>

      <div className={classes["socialMedia"]}>
        <a href="#">
          <img src="src/assets/gitHab.svg" alt="gitHab" />
        </a>
        <a href="#">
          <img src="/src/assets/Linkedin.svg" alt="telegram" />
        </a>
        <a href="#">
          <img src="/src/assets/Figma.svg" alt="figma" />
        </a>
      </div>
    </div>
  );
}

export { NavbarView };
