import React, { ReactElement } from "react";
import IconLink from "./IconLink";
import GithubIcon from "./GithubIcon.svg";

const GithubIconLink = ({ href, className }: { href: string; className?: string }): ReactElement => {
  return (
    <IconLink href={href} className={className}>
      <GithubIcon />
    </IconLink>
  );
};

export default GithubIconLink;
