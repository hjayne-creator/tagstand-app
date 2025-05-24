import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import FooterSection from '../../../components/home/FooterSection';

function normalizeCategory(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryParam = params.category;
  const matchingProducts = products.filter(
    (p) => normalizeCategory(p.category) === categoryParam
  );
  const categoryName = matchingProducts[0]?.category || categoryParam.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; {categoryName}
        </nav>
        <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
        {matchingProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {matchingProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="block hover:shadow-lg transition-shadow">
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-center py-16">No products found in this category.</div>
        )}
      </main>
      <FooterSection />
    </div>
  );
} 