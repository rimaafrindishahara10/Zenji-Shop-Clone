"use client";

const collectionItems = [
  {
    image: "/new01.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "BLUE FLAME TEE",
  },
  {
    image: "/new02.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "BUSHIDO TEE",
  },
  {
    image: "/new3.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "DEMON BLOOD TEE",
  },
  {
    image: "/new04.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "DOMAIN EXPANSION TEE",
  },
  {
    image: "/new05.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "EXPANSION TEE",
  },
];

const NAVBAR_HEIGHT = 72;
const STACK_OFFSET = 28;

export default function StackingCollection() {
  return (
    <section className="bg-[#060606] py-20 px-6 md:px-16">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-red-600 font-mono text-sm mb-2">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase">
            SALE
          </h2>
        </div>
        <button className="border border-white text-white font-mono text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors">
          VIEW_ALL
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {collectionItems.map((item, i) => {
          const isLast = i === collectionItems.length - 1;
          return (
            <div
              key={i}
              className={`sticky w-full overflow-hidden ${isLast ? "mb-24" : ""}`}
              style={{
                top: `${NAVBAR_HEIGHT + i * STACK_OFFSET}px`,
                zIndex: i + 1,
                height: "80vh",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600 z-10" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-red-500 font-mono text-sm mb-2">
                  {item.tag}
                </p>
                <h3 className="text-4xl md:text-6xl font-black uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
