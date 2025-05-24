import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white text-gray-900 shadow-md">
      <div className="flex items-center gap-3 font-bold text-lg">
        <Link href="/">
          <Image src="/logo.png" alt="TagStand Logo" width={200} height={200} className="inline-block align-middle" />
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-blue-600">Shop</Link>
          <Link href="/custom-tags" className="hover:text-blue-600">Custom Tags</Link>
          <Link href="/resources" className="hover:text-blue-600">Resources</Link>
          <Link href="/support" className="hover:text-blue-600">Support</Link>
        </div>
      </div>
      <div>
        <Link href="/account" className="hover:text-blue-600 mr-4 align-middle inline-block" aria-label="Account">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block align-middle">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </Link>
        <Link href="/cart" className="hover:text-blue-600">Cart</Link>
      </div>
    </nav>
  );
} 