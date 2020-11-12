import {Chord as ChordType, fromStringToChord, toStringFromChord} from './utils';
import React from 'react';
import {useState} from 'react';

function Chord(props: {chord: ChordType, setChord: (((ChordType) => void) | null)}): JSX.Element {
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
                props.setChord(fromStringToChord(event.target.value));
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
                placeholder={toStringFromChord(props.chord)} 
                aria-label="Note" 
                aria-describedby="basic-addon1" 
                onChange={changeValue}
            /></form>);
    }
}

export default Chord