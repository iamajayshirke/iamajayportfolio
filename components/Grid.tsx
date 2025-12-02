import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full pb-20 px-5 md:px-20 sm:mt-30">
        {gridItems.map(({id,title,description,className,img, imgClassName,spareImg,titleClassName}) => {
          return (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
