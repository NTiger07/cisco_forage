import React from "react";

export default function Exhibit(props) {
  return (
    <div className="exhibit_container">
      <div className="exhibit_content">
        <h1>{props.exhibitTitle}</h1>
        {props.exhibitChildren}
      </div>
    </div>
  );
}
