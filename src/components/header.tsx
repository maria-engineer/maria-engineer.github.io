import { navigate } from "gatsby";
import React, { useState } from "react";

import { Button } from "./commonStyles";
import styled from "@emotion/styled";

interface HeaderProps {
  siteTitle?: string;
  currentPage?: string;
  currentSubPage?: string;
}

const TopMenuButton = styled(Button)`
  background-color: #8bf;
`;

export default function Header({
  currentPage = "",
  siteTitle = "",
  currentSubPage = "",
}: HeaderProps) {
  const [submenuOpen, setSubmenuOpen] = useState<string | undefined>(
    currentPage === "Interests" ? currentPage : undefined
  );
  const title = currentPage ?? siteTitle ?? "Home";
  const x = (Math.floor(Math.random() * 2) == 0);
  const main = x ? "Maria Mateescu \u2022 Software Engineer" : "Maria Mateescu \u2022 Personal Coach";

  let pageTitle =
    currentPage === "Home"
      ? main
      : currentPage + " \u2022 " + currentSubPage;
  if (currentSubPage == "") {
    pageTitle = "Maria \u2022 " + currentPage;
  }
  return (
    <div className="d-flex flex-column">
      <div className="banner">{pageTitle}</div>
      <div className="d-flex flex-wrap flex-row justify-content-end">
        <TopMenuButton
          onClick={() => navigate("/")}
          aria-label={"Navigate to Homepage"}
          tabindex="0"
        >
          Home
        </TopMenuButton>
        <TopMenuButton
          onClick={() => navigate("/blog/")}
          aria-label={"Navigate to Blog"}
          tabindex="0"
        >
          Blog
        </TopMenuButton>
        <div>
          <TopMenuButton
            aria-expanded={submenuOpen == "Interests"}
            aria-label={
              submenuOpen == "Interests"
                ? "Close submenu for Interests"
                : "Expand submenu for Interests"
            }
            tabindex="0"
            onClick={() =>
              submenuOpen == "Interests"
                ? setSubmenuOpen(undefined)
                : setSubmenuOpen("Interests")
            }
          >
            Interests
          </TopMenuButton>
        </div>
        <div>
          <TopMenuButton
            aria-label={"Navigate to Projects"}
            onClick={() => navigate("/projects/")}
            tabindex="0"
          >
            Projects
          </TopMenuButton>
        </div>
      </div>
      {submenuOpen && <SubMenu currentPage={submenuOpen} />}
    </div>
  );
}

function SubMenu({
  currentPage = "",
  siteTitle = "",
  currentSubPage = "",
}: HeaderProps) {
  if (currentPage === "Interests") {
    return (
      <div className="d-flex flex-wrap flex-row justify-content-end">
        <Button
          onClick={() => navigate("/theatre/")}
          aria-label={"Navigate to the page on Theatre."}
          tabindex="1"
        >
          Theatre
        </Button>
        <Button
          onClick={() => navigate("/reading/")}
          aria-label={"Navigate to the page on Reading."}
          tabindex="1"
        >
          Reading
        </Button>
        <Button
          onClick={() => navigate("/art/")}
          aria-label={"Navigate to the page on Art."}
          tabindex="1"
        >
          Art
        </Button>
        <Button
          onClick={() => navigate("/food/")}
          aria-label={"Navigate to the page on Food."}
          tabindex="1"
        >
          Food
        </Button>
      </div>
    );
  }

  return <div />;
}
