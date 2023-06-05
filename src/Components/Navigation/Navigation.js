import React, { useState } from "react";
import FocusTrap from "focus-trap-react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

const Navigation = ({ items = [] }) => {
  const [isExpanded, setExpanded] = useState(false);

  const classes = classNames(styles["Navigation__Button"], {
    [styles["Navigation__Button--IsExpanded"]]: isExpanded
  });

  const navigationClasses = classNames(styles["Navigation__Navigation"], {
    [styles["Navigation__Navigation--IsExpanded"]]: isExpanded
  });

  return (
    <FocusTrap active={isExpanded}>
      <div className={styles["Navigation"]}>
        <button
          className={classes}
          onClick={() => setExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="navigation"
        >
          <span className={styles["Navigation__Line"]}></span>
          <span className={styles["Navigation__Line"]}></span>
          <span className={styles["Navigation__Line"]}></span>
          <span className="sr-only">
            {isExpanded ? "Stäng meny" : "Öppna meny"}
          </span>
        </button>

        <nav id="navigation" className={navigationClasses}>
          <ul className={styles["Navigation__Menu"]}>
            {items.map((item, index) => (
              <ListItem key={index} setExpanded={setExpanded} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </FocusTrap>
  );
};

const ListItem = ({ setExpanded, title = "", href = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();

    setExpanded(false);
    setTimeout(() => {
      window.location.hash = href;
    }, 100);
  };
  return (
    <li className={styles["Navigation__Item"]}>
      <button
        className={styles["Navigation__Link"]}
        onClick={(e) => handleClick(e)}
      >
        {title}
      </button>
    </li>
  );
};

export default Navigation;
