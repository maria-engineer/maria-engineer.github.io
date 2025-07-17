import React, { useState } from "react";
import styled from "@emotion/styled";

interface SpoilerProps {
  title?: string;
  children: React.ReactNode;
}

const Visible = styled.button`
  flex-direction: row;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  background: transparent;
  border: none;
`;

const VisibleText = styled.div`
  text-wrap: pretty;
  margin-right: 5px;
`;

const Hidden = styled.div`
  border: 2px solid #222;
  padding: 0px 10px 10px 10px;
`;

export default function Spoiler({ title = "Toggle", children }: SpoilerProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Visible onClick={() => setOpen(!open)}>
        <VisibleText>{title}</VisibleText>
        <div>{open ? "▾" : "▸"}</div>
      </Visible>
      {open && <Hidden>{children}</Hidden>}
    </div>
  );
}
