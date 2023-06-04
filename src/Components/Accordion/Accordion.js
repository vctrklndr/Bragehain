import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { debounce } from "debounce";

import styles from "./Accordion.module.scss";

const Accordion = ({ question, answer, id }) => {
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
        className={styles.Accordion__Button}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={id}
        id={headerId}
      >
        {question}
      </button>
      <div
        className={styles.Accordion__Content}
        style={{
          maxHeight: isExpanded ? contentHeight : 0 + "px"
        }}
      >
        <div
          ref={accordionAnswer}
          className={styles.Accordion__RichText}
          aria-labelledby={headerId}
          aria-hidden={!isExpanded}
          id={id}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

export default Accordion;
