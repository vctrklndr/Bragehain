import React, { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

const Navigation = ({ items = [] }) => {
  const [isExpanded, setExpanded] = useState(false);

  const classes = classNames(styles["Navigation"], {
    [styles["Navigation--IsExpanded"]]: isExpanded
  });

  useEffect(() => {
    const { hash } = window.location;
    if (hash !== "") {
      window.location = hash;
    }
  }, []);

  return (
    <FocusTrap active={isExpanded}>
      <div className={classes}>
        <button
          className={styles["Navigation__Button"]}
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

        <nav id="navigation" className={styles["Navigation__Navigation"]}>
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
  const handleClick = () => {
    setExpanded(false);

    setTimeout(() => {
      window.location = href;
    }, 100);
  };

  return (
    <li className={styles["Navigation__Item"]}>
      <button
        className={styles["Navigation__Link"]}
        onClick={() => handleClick()}
      >
        {title}
      </button>
    </li>
  );
};

export default Navigation;
