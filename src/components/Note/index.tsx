import React, { useState } from "react";
import { useHightlight } from "../../context/HightlightContext";

import "./styles.scss";

export default function Note() {
  const { hightlight, setHightlight } = useHightlight();

  return (
    <div
      className={`note ${hightlight && "hightlight"}`}
      onClick={() => setHightlight(!hightlight)}
    >
      <h2 className="title">Titulo exemplo</h2>
      <hr />
      <p className="note-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim
        voluptates sunt iure alias accusantium consequuntur, quod maxime ex
        deleniti fuga, voluptas aliquid voluptate ipsa magni similique atque
        culpa laboriosam. Est, alias, numquam repellat nihil rerum maiores
        eligendi autem debitis dolorem aspernatur eius, aliquid exercitationem
        dolores sapiente nisi itaque aut.
      </p>
    </div>
  );
}
