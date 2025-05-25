import Image from 'next/image';

const categories = [
  { name: 'NFC Stickers', img: 'https://placehold.co/120x120/png?text=Sticker', href: '/category/nfc-stickers' },
  { name: 'Hard Tags', img: 'https://placehold.co/120x120/png?text=Hard+Tag', href: '#' },
  { name: 'Tokens', img: 'https://placehold.co/120x120/png?text=Token', href: '#' },
  { name: 'Keychains', img: 'https://placehold.co/120x120/png?text=Keychain', href: '#' },
  { name: 'Wristbands', img: 'https://placehold.co/120x120/png?text=Wristband', href: '#' },
  { name: 'NFC Cards', img: 'https://placehold.co/120x120/png?text=Card', href: '#' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50 w-full mx-0">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <p className="font-normal mb-8 text-center">Browse our most popular NFC products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group block bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center cursor-pointer border border-gray-100 hover:border-blue-400"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={80}
                height={80}
                className="mb-4 rounded w-20 h-20 object-cover border border-gray-200 group-hover:border-blue-400 transition"
              />
              <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 