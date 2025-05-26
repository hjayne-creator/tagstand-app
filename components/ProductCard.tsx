import Image from 'next/image';

export type ProductCardProps = {
  product: {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
    in_stock?: boolean;
    stock_status?: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const isInStock = product.in_stock !== false && product.stock_status === 'instock';
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover rounded"
        />
      </div>
      <h2 className="text-sm font-semibold mb-2 line-clamp-2 h-14">{product.name}</h2>
      {/*<p className="text-gray-600 mb-2">{product.description}</p>*/}
      <div className="text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</div>
      {!isInStock && (
        <div className="mb-2 text-red-600 font-semibold">Out of Stock</div>
      )}
      {isInStock && (
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      )}
    </div>
  );
} 