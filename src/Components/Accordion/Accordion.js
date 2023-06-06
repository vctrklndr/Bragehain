import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { debounce } from "debounce";
import { ReactComponent as LinkIcon } from "../../Assets/Images/icon-link.svg";

import styles from "./Accordion.module.scss";

const Accordion = ({ id = "", question = "", answer = "", links = [] }) => {
  const [contentHeight, setContentHeight] = useState(null);
  const [isExpanded, setIsExpanded] = useState(null);
  const accordionAnswer = useRef(null);

  const handleResize = debounce(
    () => setContentHeight(accordionAnswer.current.clientHeight),
    300
  );

  useEffect(() => {
    setContentHeight(accordionAnswer.current.clientHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const headerId = `${id}-header`;

  const classes = classNames(styles.Accordion, {
    [styles["Accordion--Expanded"]]: isExpanded
  });

  return (
    <div className={classes}>
      <button
        className={styles["Accordion__Button"]}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={id}
        id={headerId}
      >
        {question}
      </button>
      <div
        className={styles["Accordion__Container"]}
        style={{
          maxHeight: isExpanded ? contentHeight : 0 + "px"
        }}
      >
        <AccordionContent
          {...{
            accordionAnswer,
            id,
            headerId,
            isExpanded,
            answer,
            links
          }}
        />
      </div>
    </div>
  );
};

const AccordionContent = ({
  accordionAnswer,
  id,
  headerId,
  isExpanded,
  answer,
  links
}) => {
  const hasLinks = links.length > 0;

  return (
    <div
      ref={accordionAnswer}
      aria-labelledby={headerId}
      aria-hidden={!isExpanded}
      id={id}
      className={styles["Accordion__Content"]}
    >
      <div
        className={styles["Accordion__RichText"]}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
      {hasLinks && (
        <ul className={styles["Accordion__List"]}>
          {links.map((link, index) => (
            <LinkItem key={index} {...link} />
          ))}
        </ul>
      )}
    </div>
  );
};

const LinkItem = ({ title = "", href = "" }) => {
  return (
    <li className={styles["Accordion__Item"]}>
      <a className={styles["Accordion__Link"]} href={href}>
        {title}
        <LinkIcon className={styles["Accordion__Icon"]} />
      </a>
    </li>
  );
};

export default Accordion;
