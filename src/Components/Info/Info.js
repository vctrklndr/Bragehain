import React from "react";
import Faq from "../Faq/Faq";
import FaqItems from "../../Data/FaqItems";
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
                      <LinkItem key={index} {...link} />
                    ))}
                  </ul>
                )}
              </div>
            </React.Fragment>
          );
        })}
        <h2
          className={styles["Info__RVSP"]}
          dangerouslySetInnerHTML={{ __html: rvsp }}
        />
      </div>
      <Faq {...FaqItems} />
    </div>
  );
};

const LinkItem = ({ href = "", title = "" }) => {
  return (
    <li className={styles["Info__Item"]}>
      <a className={styles["Info__Link"]} href={href}>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default Info;
