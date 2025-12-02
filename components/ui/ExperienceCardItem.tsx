import React, { FC } from "react";
import { Button } from "./MovingBorders";
interface ExperienceCardProps {
  data: {
    id: number;
    title: string;
    company: string;
    desc: string;
    className: string;
    thumbnail: string;
  };
}
const ExperienceCardItem: FC<ExperienceCardProps> = ({ data }) => {
  return (
    <Button
      //   key={card.id}
      //   random duration will be fun , I think , may be not
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        // add this border radius to make it more rounded so that the moving border is more realistic
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      // remove bg-white dark:bg-slate-900
      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
        <img
          src={data.thumbnail}
          alt={data.thumbnail}
          className="lg:w-32 md:w-20 w-16 rounded-sm"
        />
        <div className="lg:ms-5 flex flex-col content-between justify-between">
            <div>
          <h1 className="text-white-100 text-start text-xl md:text-3xl font-bold underline">
            {data.company}
          </h1>
          <h1 className="text-white-100 text-start text-xl md:text-xl font-bold">
            {data.title}
          </h1>
          </div>
          <p className="text-start text-white-100 mt-3 font-semibold">
            {data.desc}
          </p>
        </div>
      </div>
    </Button>
  );
};

export default ExperienceCardItem;
