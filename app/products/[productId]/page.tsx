import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FooterSection from '../../../components/home/FooterSection';

async function getProduct(productId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products/${productId}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return await res.json();
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  if (!product) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/products" className="text-blue-600 hover:underline">Back to Products</Link>
      </div>
    );
  }

  const isInStock = product.in_stock !== false && product.stock_status === 'instock';

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/products" className="hover:underline">NFC Stickers</Link> &gt; {product.name}
        </nav>
        <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg shadow p-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-xs mb-6">
              <Image src={product.images?.[0]?.src || ''} alt={product.name} width={400} height={400} className="rounded object-cover w-full h-auto" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="text-xl text-blue-600 font-semibold mb-4">${parseFloat(product.price).toFixed(2)}</div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium mb-1">Quantity</label>
                <input id="quantity" type="number" min={1} defaultValue={1} className="w-20 border rounded px-2 py-1" disabled={!isInStock} />
              </div>
              <p className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: product.description || '' }} />
              {!isInStock ? (
                <div className="mb-6 text-red-600 font-semibold">Out of Stock</div>
              ) : null}
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isInStock}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 