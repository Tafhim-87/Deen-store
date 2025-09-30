export default function Footer() {
  return (
    <footer className="bg-black text-white w-full flex items-center justify-center">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 md:justify-items-center gap-6 px-6">
        <div>
          <h4 className="font-bold">Deen Fashion</h4>
          <p className="text-sm">
            Reliable service, affordable prices, fast delivery.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Information</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Shipment Policy</li>
            <li>Care Instructions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Profile</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Order Tracking</li>
            <li>Wishlist</li>
          </ul>
        </div>
      <div className="text-center py-4 text-sm w-full md:col-span-3 border-t border-gray-700 mt-4">
        © 2025 Shop.deenfashionbd.com | All rights reserved.
      </div>
      </div>
    </footer>
  );
}
