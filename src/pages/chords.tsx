import React from "react"
import { Note as NoteType, Chord as ChordType, getChordNotes } from "../components/utils"
import { useState } from "react"
import Scale from "../components/scale"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Chord from "../components/chord"

export default function ChordPage(): JSX.Element {
  const [topChord, setTopChord] = useState<ChordType>({tonic: { base: "C", modifier: 0 }, type: "MAJOR", addOns: []});

  return (<Layout currentPage="Music">
    <SEO title="Chords" />
      <div >
        <h1>Main Chord</h1>
        <p><Chord chord={topChord} setChord={setTopChord} /></p>
      </div>
    <div>
      <h2>Available Notes:</h2>
      <p><Scale notes={getChordNotes(topChord)} /></p>
    </div>
  </Layout>
  );
}

