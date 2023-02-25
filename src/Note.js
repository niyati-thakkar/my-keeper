import React from "react";
import {DeleteOutline} from "@mui/icons-material/";
// import TextField from "@mui/material/TextField";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteOutline /></button>
    </div>
  );
}

export default Note;