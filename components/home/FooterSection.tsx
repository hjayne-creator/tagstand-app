import Link from 'next/link';

const productsLinks = [
  { label: 'NFC Stickers', href: '#' },
  { label: 'Hard Tags', href: '#' },
  { label: 'Tokens', href: '#' },
  { label: 'Keychains', href: '#' },
  { label: 'Wristbands', href: '#' },
  { label: 'Cards', href: '#' },
  { label: 'Readers/Writers', href: '#' },
];

const solutionsLinks = [
  { label: 'Retail & Marketing', href: '#' },
  { label: 'Asset Tracking', href: '#' },
  { label: 'Events & Hospitality', href: '#' },
  { label: 'Product Authentication', href: '#' },
  { label: 'Payments', href: '#' },
  { label: 'Customer Engagement', href: '#' },
];

const supportLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Technical Support', href: '#' },
  { label: 'Custom Orders', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start gap-12">
        {/* About/Brand */}
        <div className="mb-8 md:mb-0 flex-1 min-w-[200px] md:pr-8">
          <div className="font-bold text-xl mb-2">Tagstand</div>
          <p className="text-xs text-gray-300 mt-2 max-w-xs">
            Founded in 2011, Tagstand is a leader in NFC technology, offering custom solutions and high-quality products for businesses and individuals.
          </p>
        </div>
        {/* Links Columns - Centered */}
        <div className="flex flex-col sm:flex-row flex-[2] justify-center gap-12 w-full">
          <div>
            <div className="font-semibold text-lg mb-3">Products</div>
            <ul className="space-y-2">
              {productsLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-lg mb-3">Solutions</div>
            <ul className="space-y-2">
              {solutionsLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-lg mb-3">Support</div>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} Tagstand. All rights reserved.
      </div>
    </footer>
  );
} 