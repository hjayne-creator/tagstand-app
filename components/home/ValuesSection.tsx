import { FaTag, FaShieldAlt, FaTruck, FaRegStar } from 'react-icons/fa';

export default function ValuesSection() {
  return (
    <section className="py-12 bg-white mx-0 md:mx-0 rounded-none">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0">
        <div className="flex-1 flex flex-col items-center px-4">
          <FaTag className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
          <p className="text-gray-500 text-base text-center">Create personalized NFC tags to match your brand</p>
        </div>
        <div className="flex-1 flex flex-col items-center px-4">
          <FaShieldAlt className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
          <p className="text-gray-500 text-base text-center">Premium materials and chips for every product</p>
        </div>
        <div className="flex-1 flex flex-col items-center px-4">
          <FaTruck className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
          <p className="text-gray-500 text-base text-center">Orders ship within 24 hours</p>
        </div>
        <div className="flex-1 flex flex-col items-center px-4">
          <FaRegStar className="text-blue-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-500 text-base text-center">Industry leaders since 2011</p>
        </div>
      </div>
    </section>
  );
} 