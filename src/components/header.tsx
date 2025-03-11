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

const Menu = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const Banner = styled.h1`
  @media only screen and (max-width: 700px) {
    height: 40px;
    font-size: 24px;
  }
  height: 65px;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.1;
  font-size: 55px;
  font-weight: 350;
  color: #38f;
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
  const x = Math.floor(Math.random() * 2) == 0;
  const main = x
    ? "Maria Mateescu \u2022 Software Engineer"
    : "Maria Mateescu \u2022 Personal Coach";

  let pageTitle =
    currentPage === "Home" ? main : currentPage + " \u2022 " + currentSubPage;
  if (currentSubPage == "") {
    pageTitle = "Maria \u2022 " + currentPage;
  }
  return (
    <div className="d-flex flex-column">
      <Banner>{pageTitle}</Banner>
      <Menu>
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
        <TopMenuButton
          aria-label={"Navigate to Coaching"}
          onClick={() => navigate("/coaching/")}
          tabindex="0"
        >
          Coaching
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
      </Menu>
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
      <Menu>
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
          onClick={() => navigate("/projects/")}
          aria-label={"Navigate to the page on projects I did."}
          tabindex="1"
        >
          Projects
        </Button>
        <Button
          onClick={() => navigate("/food/")}
          aria-label={"Navigate to the page on Food."}
          tabindex="1"
        >
          Food
        </Button>
      </Menu>
    );
  }

  return <div />;
}
