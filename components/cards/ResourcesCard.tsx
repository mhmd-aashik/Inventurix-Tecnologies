import Image from "next/image";
import Link from "next/link";
import React from "react";

type ResourcesCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ResourcesCard = ({
  id,
  title,
  description,
  image,
}: ResourcesCardProps) => {
  return (
    <div className="w-[370px] h-full bgwhite_bgdark border border-[#0076e3] rounded-xl flex flex-col">
      <Image
        src={image}
        alt={title}
        width={2017}
        height={2017}
        className="w-[600px] h-[210px] object-cover overflow-hidden rounded-t-xl"
      />
      <div className="flex flex-col gap-3 p-4 items-start text-left">
        <h2 className="textwhite_textdark text-xl font-semibold leading-6">
          {title}
        </h2>
        <p className="textwhite_textdark text-base font-light leading-6">
          {description}
        </p>
        <Link
          className="text-[#0076e3] text-base font-semibold leading-6"
          href={`/resources/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ResourcesCard;
