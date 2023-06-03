import React from "react";
import styles from "./Info.module.scss";

const Info = ({ items = [], rvsp = "" }) => {
  return (
    <div className={styles["Info"]}>
      <div className={styles["Info__Inner"]}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <h2 id={item.id} className={styles["Info__Title"]}>
                <span>{item.title}</span>
              </h2>
              <div className={styles["Info__Grid"]}>
                <div
                  className={styles["Info__Text"]}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                {item.links.length > 0 && (
                  <ul className={styles["Info__LinkList"]}>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a className={styles["Info__Link"]} href={link.href}>
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </React.Fragment>
          );
        })}
        <h2 className={styles["Info__RVSP"]}>{rvsp}</h2>
      </div>
    </div>
  );
};

export default Info;
