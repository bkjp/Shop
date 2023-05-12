import React from "react";
import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageFill = (props: IProps) => {
  const { src, alt, width, height } = props;

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
        priority={true}
      />
    </div>
  );
};
