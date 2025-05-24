import Image from 'next/image';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="mb-4 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
    </div>
  );
} 