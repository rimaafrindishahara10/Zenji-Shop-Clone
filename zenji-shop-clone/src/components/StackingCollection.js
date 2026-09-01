"use client";

const collectionItems = [
  {
    image: "/img01.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "BLUE FLAME TEE",
  },
  {
    image: "/img03.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "BUSHIDO TEE",
  },
  {
    image: "/img04.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "DEMON BLOOD TEE",
  },
  {
    image: "/img05.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "DOMAIN EXPANSION TEE",
  },
  {
    image: "/img06.jpg",
    tag: "COLLECTION // THE_ORIGIN_DROP",
    title: "EXPANSION TEE",
  },
];

export default function StackingCollection() {
  return (
    <section className="bg-[#060606] py-20 px-6 md:px-16">
      {/* HEADING AND BUTTON */}
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

      {/* STACKING CARDS */}
      <div className="relative max-w-6xl mx-auto pb-24">
        {collectionItems.map((item, i) => (
          <div
            key={i}
            className="sticky w-full overflow-hidden"
            style={{
              top: `${i * 28}px`,
              zIndex: i + 1,
              height: "65vh",
              marginBottom: "40px",
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
              <p className="text-red-500 font-mono text-sm mb-2">{item.tag}</p>
              <h3 className="text-4xl md:text-6xl font-black uppercase">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
