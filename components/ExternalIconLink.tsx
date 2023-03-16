import React, { ReactElement } from "react";
import IconLink from "./IconLink";
import ExternalLinkIcon from "./ExternalLinkIcon.svg";

const ExternalIconLink = ({ href }: { href: string }): ReactElement => {
  return (
    <IconLink href={href}>
      <ExternalLinkIcon />
    </IconLink>
  );
};

export default ExternalIconLink;
