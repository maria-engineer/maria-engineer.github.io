import React from "react";
import {
  Note as NoteType,
  getScale,
  getRelativeMajor,
  getRelativeMinor,
} from "../components/utils";
import { useState } from "react";
import Scale from "../components/scale";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Note from "../components/note";
import { Control } from "../components/commonStyles";

export default function ScalesPage(): JSX.Element {
  const [topNote, setTopNote] = useState<NoteType>({ base: "C", modifier: 0 });
  const relativeMinor = getRelativeMinor(topNote);
  const relativeMajor = getRelativeMajor(topNote);
  return (
    <Layout currentPage="Music" currentSubPage="Scales">
      <SEO
        title="Scales"
        description={"Generate the scales for a note, and the relative scales"}
        keywords={[
          "music",
          "theory",
          "scales",
          "generate",
          "relative",
          "minor",
          "major",
          "notes",
          "dominant",
        ]}
      />
      <div className="d-flex flex-wrap">
        <div className="pr-2">
          <h2>Main Note</h2>
          <p>
            <Note note={topNote} setNote={setTopNote} />
          </p>
        </div>
        <div className="align-self-end">
          <p>
            <div className="buttons">
              <Control
                className="orange"
                onClick={() => setTopNote(relativeMinor)}
              >
                <div className="d-flex flex-column mb-2">
                  <div>Relative Minor:</div>
                  <Note note={relativeMinor} setNote={null} />
                </div>
              </Control>
            </div>
          </p>
        </div>
        <div className="align-self-end">
          <p>
            <div className="buttons">
              <Control
                className="orange"
                onClick={() => setTopNote(relativeMajor)}
              >
                {" "}
                <div className="d-flex flex-column mb-2">
                  <div>Relative Major: </div>
                  <Note note={relativeMajor} setNote={null} />
                </div>
              </Control>
            </div>
          </p>
        </div>
      </div>
      <div>
        <h2>Major Scale</h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "MAJOR")} />
            </div>
          </div>
        </p>
      </div>
      <div>
        <h2>Natural Minor Scale</h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "NATURAL")} />
            </div>
          </div>
        </p>
      </div>

      <div>
        <h2> Harmonic Minor Scale </h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "HARMONIC")} />
            </div>
          </div>
        </p>
      </div>
      <div>
        <h2> Chromatic Scale </h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "CHROMATIC")} />
            </div>
          </div>
        </p>
      </div>
      <div>
        <h2> Diminished Scale </h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "DIMINISHED")} />
            </div>
          </div>
        </p>
      </div>
      <div>
        <h2> Altered Scale </h2>
        <p>
          <div className="lcars-card">
            <div className="card-body">
              <Scale notes={getScale(topNote, "ALTERED")} />
            </div>
          </div>
        </p>
      </div>
    </Layout>
  );
}
