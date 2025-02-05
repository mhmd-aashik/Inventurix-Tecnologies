import Image from "next/image";
import React from "react";
import dMap from "../../public/assets/map/map-d.png";
import lMap from "../../public/assets/map/map-b.png";

const ClientMap = () => {
  return (
    <div className="flex bgwhite_bgdark flex-col items-center justify-center text-center py-10">
      <div>
        <h2 className="text-2xl text-blue-600 uppercase">Our Client</h2>

        <p className="text-lg text-gray-500 py-4 max-w-[900px]">
          See what our customer say about us
        </p>
      </div>
      <div className="flex relative justify-center items-center w-full mx-auto px-5 ">
        <div>
          <Image
            src={lMap}
            alt="Inventurix Tecnologies"
            width={1000}
            height={1000}
            className="dark:hidden w-full h-[700px] object-contain"
          />

          <Image
            src={dMap}
            alt="Inventurix Tecnologies"
            width={1000}
            height={1000}
            className="hidden dark:block w-full h-[700px] object-contain"
          />
        </div>
        <div className="absolute animate-pulse right-[470px] top-[300px] h-3 w-3 rounded-full bg-blue-500" />
      </div>
    </div>
  );
};

export default ClientMap;
