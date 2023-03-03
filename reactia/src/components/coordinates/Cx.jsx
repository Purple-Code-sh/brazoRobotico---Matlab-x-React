import { useState } from "react";

export default function Cx() {
  const [width, setWidth] = useState(0);
  const changeWidth = (event) => {
    setWidth(parseInt(event.target.value));
  };
  console.log;
}
