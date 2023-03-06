import React from "react";
import PointA from "./points/PointA";
import PointB from "./points/PointB";
import PointC from "./points/PointC";

export default function PoinsSection() {
  return (
    <div>
      <section className=" bg-shBase-dark w-full h-fit px-6 pt-0 pb-4 my-4 mb-2 rounded-2xl">
        <h3 className="w-full h-fit p-2 rounded-2xl text-center text-shBase-light text-xl font-bold">
          Puntos guardados
        </h3>
        <section>
          <PointA></PointA>
          <PointB></PointB>
          <PointC></PointC>
        </section>
      </section>

      <div className=" flex justify-between px-12 mt-4">
        <button className=" bg-shPrimary-light opacity-40 font-semibold text-shBase-dark hover:text-shBase-contrast hover:opacity-100 rounded-full w-20 py-1 m-2">
          Line
        </button>
        <button className=" bg-shPrimary-light opacity-40 font-semibold text-shBase-dark hover:text-shBase-contrast hover:opacity-100 rounded-full py-1 w-20 m-2">
          Curva
        </button>
        <button className=" bg-shTertiary-green opacity-30 font-semibold text-shBase-dark hover:text-shBase-contrast hover:opacity-100 rounded-full py-1 w-20 m-2">
          Home
        </button>
      </div>
    </div>
  );
}
