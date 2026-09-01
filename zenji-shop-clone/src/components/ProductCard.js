export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      {product.onSale && (
        <span className="absolute top-2 left-2 z-10 bg-red-600 text-xs px-2 py-1 font-bold">
          SALE 15% OFF
        </span>
      )}
      <div className="aspect-[3/4] bg-zinc-800 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="pt-3">
        <h3 className="font-bold uppercase text-sm">{product.name}</h3>
        <div className="flex gap-2 items-center mt-1">
          {product.onSale ? (
            <>
              <span className="line-through text-white/40 text-sm">
                ${product.price}
              </span>
              <span className="text-red-500 font-bold">
                ${product.salePrice}
              </span>
            </>
          ) : (
            <span className="font-bold">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
