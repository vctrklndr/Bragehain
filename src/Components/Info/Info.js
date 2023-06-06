import React from "react";
import classNames from "classnames";
import { ReactComponent as LinkIcon } from "../../Assets/Images/icon-link.svg";
import styles from "./Info.module.scss";

const Info = ({ items = [], rvsp = "" }) => {
  return (
    <div className={styles["Info"]}>
      <div className={styles["Info__Inner"]}>
        {items.map(({ id = "", title = "", text = "", links = [] }, index) => {
          return (
            <React.Fragment key={index}>
              <h2 id={id} className={styles["Info__Title"]}>
                {title}
              </h2>
              <div
                className={classNames(styles["Info__Grid"], {
                  [styles["Info__Grid--Narrow"]]: index === 0
                })}
              >
                <div
                  className={styles["Info__Text"]}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                {links.length > 0 && (
                  <ul className={styles["Info__LinkList"]}>
                    {links.map((link, index) => (
                      <LinkItem key={index} {...link} />
                    ))}
                  </ul>
                )}
              </div>
            </React.Fragment>
          );
        })}
        <div
          className={styles["Info__RVSP"]}
          dangerouslySetInnerHTML={{ __html: rvsp }}
        />
      </div>
    </div>
  );
};

const LinkItem = ({ href = "", title = "" }) => {
  return (
    <li className={styles["Info__Item"]}>
      <a className={styles["Info__Link"]} href={href}>
        <span>
          {title} <LinkIcon className={styles["Info__Icon"]} />
        </span>
      </a>
    </li>
  );
};

export default Info;
