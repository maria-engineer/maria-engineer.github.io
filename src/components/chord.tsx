import {
  Chord as ChordType,
  fromStringToChord,
  toStringFromChord,
  getNextSemitone,
  getPrevSemitone,
} from "./utils";
import React from "react";

import { useState } from "react";
import { Control } from "./commonStyles";

interface ChordProps {
  chord: ChordType;
  setChord?: (a: ChordType) => void;
}

function Chord(props: ChordProps): JSX.Element {
  if (props.setChord == null) {
    return (
      <h2 className="d-flex bd-highlight px-2">
        {toStringFromChord(props.chord)}
      </h2>
    );
  } else {
    const [isValid, setIsValid] = useState<boolean>(true);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        props.setChord && props.setChord(fromStringToChord(event.target.value));
        setIsValid(true);
      } catch (errror) {
        setIsValid(false);
      }
    };
    return (
      <div className="buttons d-flex flex-row mb-3 ml-3">
        <input
          data-bs-theme="dark"
          type="text"
          className={
            isValid
              ? "mr-21 lcars-form-control lcars-lcars-is-valid"
              : "mr-21 lcars-form-control lcars-is-invalid"
          }
          placeholder={toStringFromChord(props.chord)}
          aria-label="Note"
          aria-describedby="basic-addon1"
          onChange={changeValue}
        />
        <Control
          className={!isValid ? "c46" : "orange"}
          disabled={!isValid}
          onClick={() =>
            props.setChord!({
              tonic: getPrevSemitone(props.chord.tonic, true),
              type: props.chord.type,
              addOns: props.chord.addOns,
            })
          }
        >
          Transpose down
        </Control>
        <Control
          className={!isValid ? "c46" : "orange"}
          disabled={!isValid}
          onClick={() =>
            props.setChord!({
              tonic: getNextSemitone(props.chord.tonic, false),
              type: props.chord.type,
              addOns: props.chord.addOns,
            })
          }
        >
          Transpose up
        </Control>
      </div>
    );
  }
}

export default Chord;
