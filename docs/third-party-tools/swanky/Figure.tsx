import React from "react";

export default function Figure({ src, caption, width = "460px" }) {
  return (
    <center>
      <figure>
        <img src={src} alt={caption} width={width}></img>
        <figcaption>{caption}</figcaption>
      </figure>
    </center>
  );
}
