import React from "react";
import { Tooltip } from "react-tooltip";

import styled from "@emotion/styled";

interface FootnoteProps {
  presentation?: string;
  children: React.ReactNode;
}

const STooltip = styled(Tooltip)`
  max-width: 70%;
`;

const Highlight = styled.sup`
    color: #fc3;
    text-decoration: underline;
    padding-left: 3px;
    padding-right: 3px;
`;

export default function Footnote({ presentation = "*", children }: FootnoteProps) {
  return (
    <span>
      <Highlight id={"tooltip-" + presentation}>{presentation}</Highlight>
      <STooltip opacity={1} anchorSelect={"#tooltip-" + presentation} clickable>
        {children}
      </STooltip> 
    </span>
  );
}
