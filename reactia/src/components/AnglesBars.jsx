import React, { useState } from "react";
import Bar1 from "./bars/Bar1";
import Bar2 from "./bars/Bar2";
import Bar3 from "./bars/Bar3";

export default function AnglesBars() {
  return (
    <div className="w-full">
      <section
        id="bars"
        className=" h-fit bg-shBase-dark rounded-2xl px-6 pt-0 pb-2"
      >
        <div className="w-full h-fit p-2 rounded-2xl text-center text-white text-xl font-bold">
          Ángulos
        </div>
        <section className="flex w-full py-3">
          <h3 className=" pr-2 text-shBase-contrastDark font-semibold text-xl">
            θ1
          </h3>
          <div className="flex-auto pl-2">
            <Bar1></Bar1>
          </div>
        </section>
        <section className="flex w-full py-3">
          <h3 className=" pr-2 text-shBase-contrastDark font-semibold text-xl">
            θ2
          </h3>
          <div className="flex-auto pl-2">
            <Bar2></Bar2>
          </div>
        </section>
        <section className="flex w-full py-3">
          <h3 className=" pr-2 text-shBase-contrastDark font-semibold text-xl">
            θ3
          </h3>
          <div className="flex-auto pl-2">
            <Bar3></Bar3>
          </div>
        </section>
      </section>
    </div>
  );
}
