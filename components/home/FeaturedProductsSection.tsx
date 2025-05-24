const products = [
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 0.47, img: '/product-image-demo.jpg', popular: true },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 2.90, img: '/product-image-demo.jpg', popular: true },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 3.10, img: '/product-image-demo.jpg', popular: true },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 4.60, img: '/product-image-demo.jpg', popular: true },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 1.99, img: '/product-image-demo.jpg', popular: false },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 1.25, img: '/product-image-demo.jpg', popular: false },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 0.99, img: '/product-image-demo.jpg', popular: false },
  { name: 'Black PET Logo NFC Sticker – NTAG216', price: 2.50, img: '/product-image-demo.jpg', popular: false },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-16 bg-white w-full mx-0">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured NFC Products</h2>
        <p className="font-normal mb-8 text-center">Our most popular NFC solutions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col h-full border border-gray-100">
              <div className="relative">
                <a href="#">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="rounded-t-xl w-full h-40 object-cover"
                  />
                  {product.popular && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                  )}
                </a>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <a href="#" className="font-semibold text-lg mb-2 hover:text-blue-600 transition">{product.name}</a>
                <div className="mb-4 text-base text-gray-700">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
                <button className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 