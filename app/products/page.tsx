"use client";
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(setCategories);

    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8 flex">
        {/* Left Sidebar */}
        <aside className="w-64 pr-8 border-r">
          <h2 className="font-bold text-xl mb-4">Shop by Product</h2>
          <ul>
            {categories.map((cat: any) => (
              <li key={cat.id}>
                <button
                  className="block w-full text-left py-2 px-2 rounded mb-1 hover:bg-gray-100"
                  onClick={() => router.push(`/category/${cat.slug}`)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content */}
        <section className="flex-1 pl-8">
          <h1 className="text-3xl font-bold mb-8">All Products</h1>
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
                  in_stock: product.in_stock,
                  stock_status: product.stock_status,
                }} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 