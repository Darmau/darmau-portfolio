"use client";
import Image from "next/image";
import { useState } from "react";

type Portfolio = {
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
          };
        };
      };
    };
  };
};

export default function Projects({ portfolios }: { portfolios: Portfolio[] }) {
  const [hoverIndex, setHoverIndex] = useState(0);
  return (
    <section className="relative bg-transparent p-16 border-y border-black flex flex-col md:flex-row">
      <div className="mx-auto max-w-7xl space-y-8 md:grid md:grid-cols-2 md:gap-8">
        <div className="md:col-span-1 md:flex md:items-center md:justify-center">
          <ul className="space-y-4">
            {portfolios.map((portfolio: Portfolio, index: number) => {
              const hoverStyle = index === hoverIndex ? 'border border-black bg-white/40 backdrop-blur-lg' : 'opacity-50 border border-transparent';
              return (
                <li
                  key={index}
                  className={`flex items-center space-x-4 cursor-pointer p-4 box-content transition-all	duration-300 ${hoverStyle}`}
                  onMouseEnter={() => setHoverIndex(index)}
                >
                  <div className="text-6xl font-title">{`0${index+1}.`}</div>
                  <div className="space-y-2">
                    <h2 className="font-serif font-bold text-xl">{portfolio.attributes.title}</h2>
                    <p className="text-gray-600 text-sm">{portfolio.attributes.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:col-span-1">
          <Image
            className="aspect-[4/3]"
            src={
              portfolios[hoverIndex].attributes.cover.data.attributes.formats
                .large!.url
            }
            alt={portfolios[hoverIndex].attributes.title}
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
