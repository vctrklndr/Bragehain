import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { debounce } from "debounce";

import styles from "./Accordion.module.scss";

const Accordion = ({ question, answer, open, id }) => {
  const [contentHeight, setContentHeight] = useState(null);
  const [isExpanded, setIsExpanded] = useState(open);
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

  const handleClick = (expanded, question) => {
    setIsExpanded(expanded);

    if (typeof window.dataLayer === "undefined") return;

    window.dataLayer.push({
      faqTitle: question,
      event: !isExpanded
        ? "customerServiceExpandFaqQuestion"
        : "customerServiceMinimizeFaqQuestion"
    });

    window._mtm = window._mtm || [];
    window._mtm.push({
      faqTitle: question,
      event: !isExpanded
        ? "customerServiceExpandFaqQuestion"
        : "customerServiceMinimizeFaqQuestion"
    });
  };

  return (
    <div className={classes}>
      <button
        className={styles.Accordion__Button}
        onClick={() => handleClick(!isExpanded, question)}
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
