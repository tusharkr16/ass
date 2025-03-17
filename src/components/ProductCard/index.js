import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-80"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-700 font-medium mt-2">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
