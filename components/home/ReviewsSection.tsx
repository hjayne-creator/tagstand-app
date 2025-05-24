import { FaStar } from 'react-icons/fa';

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white w-full mx-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <p className="font-normal mb-8">Trusted by businesses since 2011</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 rounded shadow bg-white flex-1">
            <div className="flex mb-2 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="italic mb-2">“Tagstand is a top-notch provider of NFC-capable labels. They have gone the extra mile to meet our timelines and specifications.”</p>
            <div className="font-semibold">– Alex P.</div>
            <div className="font-normal">President, Acme Corp</div>
          </div>
          <div className="p-6 rounded shadow bg-white flex-1">
            <div className="flex mb-2 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="italic mb-2">“We have happily relied on Tagstand as our supplier on a new tag-based product line. Though we had uncommon technical requirements, Tagstand provided thoughtful guidance.”</p>
            <div className="font-semibold">– Jamie L.</div>
            <div className="font-normal">President, Acme Corp</div>
          </div>
          <div className="p-6 rounded shadow bg-white flex-1">
            <div className="flex mb-2 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="italic mb-2">“Tagstand has provided NFC tags and expertise for us since 2016. They have met or exceeded all our custom needs of performance and form of NFC tags.”</p>
            <div className="font-semibold">– Morgan S.</div>
            <div className="font-normal">President, Acme Corp</div> 
          </div>
        </div>
      </div>
    </section>
  );
} 