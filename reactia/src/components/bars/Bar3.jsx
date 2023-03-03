import { useState } from "react";

export default function Bar1() {
  const [width, setWidth] = useState(0);
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
  console.log("θ3:", width);

  return (
    <>
      <input
        type="range"
        name="angleBar1"
        className="w-full cursor-pointer opacity-90 hover:opacity-100"
        onChange={changeWidth}
        min={-1024}
        max={1024}
        step={1}
        value={width}
      />
      <div className="flex">
        <button
          className=" bg-shPrimary-darker hover:bg-shPrimary-dark w-14 h-7 rounded-full font-extrabold"
          onClick={() => setWidth(width > -1024 ? width - 1 : width)}
        >
          -
        </button>
        <h4 className=" text-sm rounded-full p-2 flex-auto text-center text-shBase-light">
          {width * 0.087890625}
        </h4>
        <button
          className=" bg-shPrimary-darker hover:bg-shPrimary-dark w-14 h-7 rounded-full font-bold"
          onClick={() => setWidth(width < 1024 ? width + 1 : width)}
        >
          +
        </button>
      </div>
    </>
  );
}
