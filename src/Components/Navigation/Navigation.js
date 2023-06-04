import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

const Navigation = ({ items = [] }) => {
  const [isExpanded, setExpanded] = useState(false);

  const classes = classNames(styles["Navigation"], {
    [styles["Navigation--IsExpanded"]]: isExpanded
  });

  const navigationClasses = classNames(styles["Navigation__Navigation"], {
    [styles["Navigation__Navigation--IsExpanded"]]: isExpanded
  });

  return (
    <>
      <div className={classes}>
        <button
          className={styles["Navigation__Button"]}
          onClick={() => setExpanded(!isExpanded)}
        >
          <span className={styles["Navigation__Line"]}></span>
          <span className={styles["Navigation__Line"]}></span>
          <span className={styles["Navigation__Line"]}></span>
        </button>
      </div>
      <nav className={navigationClasses}>
        <ul className={styles["Navigation__Menu"]}>
          {items.map((item, index) => (
            <ListItem key={index} setExpanded={setExpanded} {...item} />
          ))}
        </ul>
      </nav>
    </>
  );
};

const ListItem = ({ setExpanded, title = "", href = "" }) => {
  return (
    <li className={styles["Navigation__Item"]}>
      <a
        className={styles["Navigation__Link"]}
        onClick={() => setExpanded(false)}
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default Navigation;
