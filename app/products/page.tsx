import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function CategoryPage() {
  const category = 'NFC Stickers';
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; {category}
        </nav>
        <h1 className="text-3xl font-bold mb-8">{category}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block hover:shadow-lg transition-shadow">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 