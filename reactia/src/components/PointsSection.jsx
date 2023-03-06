import React from "react";
import PointA from "./points/PointA";
import PointB from "./points/PointB";
import PointC from "./points/PointC";

export default function PoinsSection() {
  return (
    <div className=" bg-shBase-dark w-full h-fit px-6 pt-0 pb-4 my-4 mb-2 rounded-2xl">
      <h3 className="w-full h-fit p-2 rounded-2xl text-center text-shBase-light text-xl font-bold">
        Puntos guardados
      </h3>
      <section>
        <PointA></PointA>
        <PointB></PointB>
        <PointC></PointC>
      </section>
    </div>
  );
}
