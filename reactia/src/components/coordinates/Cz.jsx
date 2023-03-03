import { useState } from "react";

export default function Cz() {
  const [width, setWidth] = useState(0);
  const changeWidth = (event) => {
    setWidth(parseInt(event.target.value));
  };
  console.log;
}
