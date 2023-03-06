import React from "react";
import reloadImage from "../../media/reload.png";

export default function PointB() {
  return (
    <div className="w-full flex my-4">
      <button className=" bg-shSecondary-darker hover:bg-shSecondary-dark text-shBase-light hover:text-white w-14 h-7 rounded-full rounded-r-none">
        B
      </button>
      <div className="flex-auto text-center text-shBase-medium text-sm p-1 align-middle justify-center bg bg-shBase-dark2 rounded-full rounded-l-none">
        Presiona B para guardar las coordenadas
      </div>
      <button className="ml-2">
        <img
          src={reloadImage}
          alt="limpiar coordenadas"
          className="h-4 w-4 self-center"
        />
      </button>
    </div>
  );
}
