import React from "react";
import Note from "../Note";

import "./styles.scss";

export default function Notes() {
  return (
    <section className="notes">
      <Note />
      <Note />
      <Note />
      <Note />
    </section>
  );
}
