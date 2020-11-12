import React from "react"
import { Note as NoteType, getScale, getRelativeMajor, getRelativeMinor } from "../components/utils"
import { useState } from "react"
import { Link } from "gatsby"
import Scale from "../components/scale"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"

export default function ScalesPage(): JSX.Element {
  const [topNote, setTopNote] = useState<NoteType>({ base: "C", modifier: 0 });
  const relativeMinor = getRelativeMinor(topNote);
  const relativeMajor = getRelativeMajor(topNote);
  return (<Layout currentPage="Music">
    <SEO title="Scales" />
    <div className="d-flex column-2 ">
      <div className="pr-2">
        <h1>Main Note</h1>
        <p><Note note={topNote} setNote={setTopNote} /></p>
      </div>
      <div className="pr-2 pl-2">
        <h2> Relative Minor </h2>
        <p>
          <div className="bd-highlight">
            <button className="btn btn-light" onClick={()=>setTopNote(relativeMinor)}><Note note={relativeMinor} setNote={null} /></button>
          </div>
        </p>
      </div>
      <div className="pl-2">
        <h2> Relative Major </h2>
        <p>
          <div className="bd-highlight">
          <button className="btn btn-light" onClick={()=>setTopNote(relativeMajor)}><Note note={relativeMajor} setNote={null} /> </button>
          </div>
        </p>
      </div>
    </div>
    <div>
      <h2>Major Scale</h2>
      <p><Scale notes={getScale(topNote, "MAJOR")} /></p>
    </div>
    <div>
      <h2>Natural Minor Scale</h2>
      <p><Scale notes={getScale(topNote, "NATURAL")} /></p>
    </div>

    <div>
      <h2> Harmonic Minor Scale </h2>
      <p><Scale notes={getScale(topNote, "HARMONIC")} /></p>
    </div>
    <div>
      <h2> Chromatic Scale </h2>
      <p><Scale notes={getScale(topNote, "CHROMATIC")} /></p>
    </div>
    <div>
      <h2> Diminished Scale </h2>
      <p><Scale notes={getScale(topNote, "DIMINISHED")} /></p>
    </div>
  </Layout>
  );
}

