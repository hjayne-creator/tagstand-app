import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative py-16 w-full mx-0 overflow-hidden"
      style={{
        backgroundImage: `url('/header-bg-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/60" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 z-10">
        {/* Left: Text and Buttons */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 md:pr-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Custom NFC tags for<br />Your business</h1>
          <p className="text-xl mb-8">Shop high quality custom NFC tags for stickers, hard tags, tokens, keychains, wristbands, and more.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/products">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2 border-2 border-white cursor-pointer">
                Shop NFC Tags
              </button>
            </Link>
          </div>
        </div>
        {/* Right: NFC Card Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/header-bg-image-nfc.png"
            alt="NFC Card Example"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-md"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />
        </div>
      </div>
    </section>
  );
} 