import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProductsCardProps = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
};

const ProductsCard = ({ image, title, description }: ProductsCardProps) => {
  return (
    <div className="w-[330px] h-full bgwhite_bgdark">
      <div className="border border-blue-500 rounded-[20px] p-6">
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className="rounded-md"
        />

        <div className="flex mb-6 flex-col gap-3 p-4 items-start text-left">
          <h2 className="textwhite_textdark text-[22px] font-semibold leading-6">
            {title}
          </h2>
          <p className="textwhite_textdark line-clamp-2 text-[16px] font-light leading-6">
            {description}
          </p>
        </div>
        <Link
          href={`/products/${title}`}
          className="py-2 px-4 border rounded-full border-[#0076e3] text-[#0076e3] text-base font-semibold leading-6"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
