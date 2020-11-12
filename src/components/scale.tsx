import {Note as NoteType} from './utils';
import React from 'react';
import Note from './note';


export default function Scale(props: {notes: Array<NoteType> }): JSX.Element {
    const notes = props.notes;
    if (notes == null) {
        return null;
    }
    return(
        <div className="card">
            <div className="card-body">
             <div className="d-inline-flex pl-2 pr-2 bd-highlight ">
            {
                notes.map(
                    (note, index) =>
                    {
                    return <Note key={index} note={note} setNote={null} />;
                        }
                    )
            } 
            </div>
            </div>
        </div>
        );;
}