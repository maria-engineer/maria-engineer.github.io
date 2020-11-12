import {Note as NoteType, toStringFromNote, fromStringToNote} from './utils';
import React from 'react';
import {useState} from 'react';

function Note(props: {note: NoteType, setNote: (((NoteType) => void) | null)}): JSX.Element {
    if (props.setNote == null) {
    return (
        <h2 className="d-flex bd-highlight px-2"> 
            {toStringFromNote(props.note)}
        </h2>
        );
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
            <form>
            <input 
                type="text" 
                className={isValid? "form-control is-valid" :"form-control is-invalid"}
                placeholder={toStringFromNote(props.note)} 
                aria-label="Note" 
                aria-describedby="basic-addon1" 
                onChange={changeValue}
            /></form>);
    }
}

export default Note