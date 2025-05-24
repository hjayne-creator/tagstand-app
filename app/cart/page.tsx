import Navbar from '../../components/Navbar';

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty. (Cart functionality coming soon!)</p>
      </main>
    </div>
  );
} 