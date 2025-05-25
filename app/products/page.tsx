"use client";
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const category = 'NFC Stickers';

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.filter((p: any) => p.categories?.some((c: any) => c.name === category))));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; {category}
        </nav>
        <h1 className="text-3xl font-bold mb-8">{category}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block hover:shadow-lg transition-shadow">
              <ProductCard product={{
                id: product.id,
                name: product.name,
                description: product.short_description || '',
                price: parseFloat(product.price),
                image: product.images?.[0]?.src || '',
                category: product.categories?.[0]?.name || '',
              }} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 