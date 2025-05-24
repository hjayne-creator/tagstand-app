export default function IndustrySolutionsSection() {
  return (
    <section className="py-16 bg-gray-50 w-full mx-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Industry Solutions</h2>
        <p className="font-normal mb-8 text-center">NFC solutions tailored for different business needs</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 rounded shadow bg-blue-100 flex-1">
            <h3 className="text-xl font-semibold mb-2">Events & Conferences</h3>
            <p>Streamline networking and information sharing with NFC badges and cards.</p>
          </div>
          <div className="p-6 rounded shadow bg-blue-100 flex-1">
            <h3 className="text-xl font-semibold mb-2">Retail & Marketing</h3>
            <p>Enhance customer engagement with interactive NFC displays and promotions.</p>
          </div>
          <div className="p-6 rounded shadow bg-blue-100 flex-1">
            <h3 className="text-xl font-semibold mb-2">Access & Security</h3>
            <p>Secure, contactless access solutions for offices, gyms, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 