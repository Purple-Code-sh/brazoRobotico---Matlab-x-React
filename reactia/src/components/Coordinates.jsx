import React from "react";
import Cx from "./coordinates/Cx";
import Cy from "./coordinates/Cy";
import Cz from "./coordinates/Cz";

export default function Coordinates() {
  //logic

  return (
    <div className=" p-10 pt-0">
      <div className=" flex text-center">
        <h3 className=" w-full h-fit p-1 pb-0 rounded-2xl text-center text-white text-xl font-bold">
          Coordenadas
        </h3>
      </div>
      <section className="">
        <div className=" text-center p-5 mt-1 py-0 bg-shTertiary-green w-full h-7"></div>
      </section>
      <div>
        <div className=" text-center p-5 py-0 my-2 bg-shTertiary-green w-full h-7"></div>
      </div>
      <section>
        <div className=" text-center p-5 py-0 bg-shTertiary-green w-full h-7"></div>
      </section>
    </div>
  );
}
