import { Note as NoteType, toStringFromNote, fromStringToNote } from "./utils";
import React from "react";
import { useState } from "react";

function Note(props: {
  note: NoteType;
  setNote: ((NoteType) => void) | null;
}): JSX.Element {
  if (props.setNote == null) {
    return <>{toStringFromNote(props.note)}</>;
  } else {
    const [isValid, setIsValid] = useState<boolean>(true);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        props.setNote(fromStringToNote(event.target.value));
        setIsValid(true);
      } catch (errror) {
        setIsValid(false);
      }
    };
    return (
      <input
        type="text"
        className={
          isValid
            ? "lcars-form-control lcars-is-valid"
            : "lcars-form-control lcars-is-invalid"
        }
        placeholder={toStringFromNote(props.note)}
        aria-label="Note"
        aria-describedby="basic-addon1"
        onChange={changeValue}
      />
    );
  }
}

export default Note;
