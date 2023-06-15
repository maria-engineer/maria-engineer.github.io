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
    currentPage === "Music" || currentPage === "Interests"
      ? currentPage
      : undefined
  );
  const title = currentPage ?? siteTitle ?? "Home";
  return (
    <div className="d-flex flex-column">
      <div className="banner">
        {currentPage === "Home"
          ? "Maria Mateescu \u2022 Software Engineer"
          : currentPage + " \u2022 " + currentSubPage}
      </div>
      <div className="d-flex flex-wrap flex-row justify-content-end">
        <TopMenuButton
          onClick={() => navigate("/")}
          aria-label={"Navigate to Homepage"}
        >
          Home
        </TopMenuButton>
        <div>
          <TopMenuButton
            aria-label={
              submenuOpen == "Music"
                ? "Close submenu for Music"
                : "Expand submenu for Music"
            }
            aria-expanded={submenuOpen == "Music"}
            onClick={() =>
              submenuOpen == "Music"
                ? setSubmenuOpen(undefined)
                : setSubmenuOpen("Music")
            }
          >
            Music
          </TopMenuButton>
        </div>
        <div>
          <TopMenuButton
            aria-expanded={submenuOpen == "Interests"}
            aria-label={
              submenuOpen == "Interests"
                ? "Close submenu for Interests"
                : "Expand submenu for Interests"
            }
            onClick={() =>
              submenuOpen == "Interests"
                ? setSubmenuOpen(undefined)
                : setSubmenuOpen("Interests")
            }
          >
            Interests
          </TopMenuButton>
        </div>
        <TopMenuButton
          onClick={() => navigate("/blog/")}
          aria-label={"Navigate to Blog"}
        >
          Blog
        </TopMenuButton>
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
  if (currentPage === "Music") {
    return (
      <div className="d-flex flex-wrap flex-row justify-content-end">
        <Button
          onClick={() => navigate("/scales/")}
          aria-label={"Navigate to Music app on scales"}
        >
          Scales
        </Button>
        <Button
          onClick={() => navigate("/chords/")}
          aria-label={"Navigate to Music app on chords"}
        >
          Chords
        </Button>
      </div>
    );
  }

  if (currentPage === "Interests") {
    return (
      <div className="d-flex flex-wrap flex-row justify-content-end">
        <Button
          onClick={() => navigate("/theatre/")}
          aria-label={"Navigate to the page on Theatre."}
        >
          Theatre
        </Button>
        <Button
          onClick={() => navigate("/reading/")}
          aria-label={"Navigate to the page on Reading."}
        >
          Reading
        </Button>
        <Button
          onClick={() => navigate("/art/")}
          aria-label={"Navigate to the page on Art."}
        >
          Art
        </Button>
        <Button
          onClick={() => navigate("/food/")}
          aria-label={"Navigate to the page on Food."}
        >
          Food
        </Button>
      </div>
    );
  }

  return <div />;
}
