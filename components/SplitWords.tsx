import React, { Fragment, ReactElement } from "react";

const SplitWords = ({ children, wordClassName }: { children: string; wordClassName: string }): ReactElement => {
  const words = children.split(" ");
  return (
    <>
      {words.map((text, i) => (
        <Fragment key={i}>
          <span className={wordClassName}>{text}</span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
};

export default SplitWords;
