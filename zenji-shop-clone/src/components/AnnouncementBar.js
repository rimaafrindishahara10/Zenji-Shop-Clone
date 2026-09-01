export default function AnnouncementBar() {
  const text =
    "FREE SHIPPING WORLDWIDE ON ORDERS OVER $150 • NEW DROP: LIVE NOW • LIMITED STOCK • THE_ORIGIN_DEOP COLLECTION LIVE • ";

  return (
    <div className="bg-red-600 text-white overflow-hidden py-2 whitespace-nowrap ">
      <div className="animate-marquee inline-block font-mono text-sm tracking-wide">
        {text.repeat(2)}
      </div>
    </div>
  );
}
