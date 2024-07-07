import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MapChart from "../components/map";
import { useState, useEffect } from "react";
import GoogleContext from "../components/GoogleContext";
import Footnote from "../components/footnote";

export default function ReadingPage() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    if (!google) {
      if (window.google) {
        setGoogle(window.google);
      }
    }

    return () => {
      let script = document.getElementById("googleChartsScript");
      if (script) {
        script.remove();
      }
    };
  }, [google]);

  const books = [
    ["Country", "Title -  Author"],
    ["Argentina", "Ficciones - Jorge Luis Borges"],
    ["Australia", "The Forests of Silence - Emily Rodda"],
    ["Belgium", "Maigret - Georges Simenon"],
    ["Brazil", "The Alchemist - Paulo Coelho"],
    ["Canada", "The Penelopiad - Margaret Atwood"],
    ["China", "The Art of War - Sun Tzu"],
    ["Ivory Coast", "Standing heavy - GauZ'"],
    ["Czech Republic", "R.U.R. - Karel Capek"],
    ["France", "The Little Prince - Antoine de Saint-Exupery"],
    ["Germany", "Siddhartha - Herman Hesse"],
    ["Greece", "The Odyssey - Homer"],
    ["Ireland", "Gulliver's Travels - Jonathan Swift"],
    ["Italy", "The Prince - Niccolo Machiavelli"],
    ["Japan", "Spring Snow - Yukio Mishima"],
    ["Nigeria", "Raybearer - Jordan Ifueko"],
    ["Norway", "Hedda Gabler - Henrik Ibsen"],
    ["Poland", "Solaris - Stanislaw Lem"],
    ["Romania", "Iona - Marin Sorescu"],
    ["Russia", "Lolita - Vladimir Nabokov"],
    ["South Korea", "Kim Jiyoung, Born 1982 - Cho Nam-Joo"],
    ["Switzerland", "Heidi - Johanna Spyri"],
    ["Taiwan", "The Mermaid's Tale - Lee Wei-Jing"],
    ["Ukraine", "Death and The Penguin - Andrey Kurkov"],
    ["United Kingdom", "The Canterville Ghost - Oscar Wilde"],
    ["United States", "Giovanni's Room - James Baldwin"],
    ["Vietnam", "Ticket to Childhood - Nguyen Nhat Anh"],
  ];

  return (
    <Layout currentPage="Interests" currentSubPage="Reading">
      <SEO
        title="Reading around the world"
        description={
          "A world map keeping track of where from I've read books. With reviews."
        }
        keywords={[
          "Reading",
          "World",
          "Map",
          "Challenge",
          "Around The World",
          "Reading Around The World",
          "Books",
        ]}
      />
      <GoogleContext.Provider value={{ google, setGoogle }}>
        <div>
          <h2>Books Around the World</h2>
          <p>
            The fiction books I have read from authors from around the world.
          </p>
          <MapChart data={books} id="book" />
        </div>
      </GoogleContext.Provider>
    </Layout>
  );
}
