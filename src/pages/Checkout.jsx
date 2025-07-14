import React, { useState } from "react";
import visa from "../assets/Visa.png"
import Mastercard from "../assets/Mastercard.png"
import Nagad from "../assets/Nagad.png"
import { Link } from "react-router-dom";
import iphone from "../assets/iphone.png";
import watch from "../assets/watch.png";
import playstation from "../assets/playstation.png";
import { FiUser, FiMapPin, FiPhone, FiBookmark } from "react-icons/fi";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [showModal, setShowModal] = useState(false);
  const [tempAddress, setTempAddress] = useState({});
  const [address, setAddress] = useState({
    name: "",
    location: "",
    unitNumber: "",
    phone: "",
    landmark: "",
  });
  const handleTempChange = (e) => {
    setTempAddress({ ...tempAddress, [e.target.name]: e.target.value });
  };
  const handleOpenModal = () => {
    setTempAddress(address);
    setShowModal(true);
  };
  const handleCancel = () => {
    setTempAddress({});     
    setShowModal(false);
  };
  const checkoutProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    color: "Deep Purple",
    quantity: 1,
    price: 1199.0,
    deliveryDate: "Arrives by July 17, 2025",
    image: iphone,
  },
  {
    id: 2,
    name: "Smartwatch Series 9",
    brand: "Apple",
    color: "Graphite",
    quantity: 1,
    price: 429.0,
    deliveryDate: "Arrives by July 18, 2025",
    image: watch,
  },
  {
    id: 3,
    name: "PlayStation 5 Console",
    brand: "Sony",
    color: "White",
    quantity: 1,
    price: 499.0,
    deliveryDate: "Arrives by July 20, 2025",
    image: playstation,
  },
];

  return (
    <div className="px-6 lg:px-24 py-12 min-h-screen">
      <p className="text-lg text-gray-500 mb-4">
        Home / Shop / <span className="text-redS font-medium">Checkout</span>
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-10 mx-6">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-6">
            <button
              onClick={handleOpenModal}
              className="bg-redS text-white px-4 py-2 rounded-lg font-medium"
            >
              Manage Address
            </button>
            {address.name && (
              <div className="mt-4 text-sm text-gray-700 bg-gray-100 p-4 rounded-lg shadow-sm space-y-3">
                <div className="flex items-start gap-2">
                  <FiUser className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">Name:</span> {address.name}
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <FiMapPin className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">Address:</span> {address.location}, {address.unitNumber}
                  </p>
                </div>

                {address.landmark && (
                  <div className="flex items-start gap-2">
                    <FiBookmark className="text-redS mt-0.5" />
                    <p>
                      <span className="font-semibold">Landmark:</span> {address.landmark}
                    </p>
                  </div>
                )}

                <div className="flex items-start gap-2">
                  <FiPhone className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">Phone:</span> {address.phone}
                  </p>
                </div>
              </div>
            )}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
                  <h3 className="text-lg font-semibold mb-4">Enter Delivery Address</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); 
                      setAddress(tempAddress);
                      setTempAddress({});
                      setShowModal(false);
                    }}
                  >
                    <div className="grid gap-4">
                      <input
                        type="text"
                        name="name"
                        value={tempAddress.name || ""}
                        onChange={handleTempChange}
                        placeholder="Full Name*"
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="location"
                        value={tempAddress.location || ""}
                        onChange={handleTempChange}
                        placeholder="Location (e.g. building name, street)*"
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="unitNumber"
                        value={tempAddress.unitNumber || ""}
                        onChange={handleTempChange}
                        placeholder="Apartment / House number*"
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="landmark"
                        value={tempAddress.landmark || ""}
                        onChange={handleTempChange}
                        placeholder="Landmark (optional)"
                        className="border px-4 py-2 text-sm rounded w-full"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={tempAddress.phone || ""}
                        onChange={handleTempChange}
                        placeholder="Phone number*"
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                    </div>
                    <div className="flex justify-end mt-6 gap-3">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 border rounded text-gray-600"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-redS text-white px-4 py-2 rounded font-medium"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3">Shipping Method</h2>
            <select
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-main"
              defaultValue="standard"
            >
              <option value="standard">
                Standard delivery (4–7 working days) — FREE
              </option>
              <option value="express">
                Express delivery (2–3 working days) — $20.00
              </option>
            </select>
          </div>
          <div className="space-y-6 text-sm">
            {checkoutProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex gap-5 items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-24 object-contain "
                  />
                  <div className="space-y-1.5">
                    <p className="text-lg font-semibold text-main">{product.name}</p>
                    <p className="text-gray-500">Brand: <span className="text-gray-700">{product.brand}</span></p>
                    <p className="text-gray-500">Color: <span className="text-gray-700">{product.color}</span></p>
                    <p className="text-gray-500">Quantity: <span className="text-gray-700">{product.quantity}</span></p>
                    <p className="text-redS font-medium">{product.deliveryDate}</p>
                  </div>
                </div>

                {/* Right section: price */}
                <div className="text-lg font-bold text-gray-800 whitespace-nowrap">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section  */}
        <div className="bg-gray-100 py-6 px-8 rounded-lg w-full h-fit lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Order Summary [3]</h3>
          <div className="mt-6">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <input
                type="text"
                placeholder="ENTER PROMO CODE"
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white px-4 text-sm font-semibold">APPLY</button>
            </div>
          </div>
          <div className="text-sm mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$162.00</span>
            </div>
            <div className="flex justify-between text-redS">
              <span>Save -10%</span>
              <span>-$16.20</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$16.20</span>
            </div>
            <div className="flex justify-between text-redS">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$145.80</span>
            </div>
          </div>
        <div>
            <h2 className="font-semibold text-lg my-3">Payment</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="accent-redS mr-2"
                  />
                  <span>Debit/Credit card</span>
                </div>
                <div className="flex gap-2">
                  <img src={visa} alt="Visa" className="h-6 w-auto" />
                  <img src={Mastercard} alt="Mastercard" className="h-6 w-auto" />
                  <img src={Nagad} alt="Nagad" className="h-6 w-auto" />
                </div>
              </div>
              {paymentMethod === "credit" && (
                <>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="border px-4 py-2 text-sm rounded w-full"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiration date (MM/YY)"
                      className="border px-4 py-2 text-sm rounded"
                    />
                    <input
                      type="text"
                      placeholder="Security code"
                      className="border px-4 py-2 text-sm rounded"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="border px-4 py-2 text-sm rounded w-full"
                  />
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-redS" />
                    Use shipping address as billing address
                  </label>
                </>
              )}
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="accent-redS"
                />
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="afterpay"
                  checked={paymentMethod === "afterpay"}
                  onChange={() => setPaymentMethod("afterpay")}
                  className="accent-redS"
                />
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>
          <Link to="/" className="bg-black text-white px-6 py-3 mt-6 flex justify-center w-full font-semibold rounded-lg">Place Order</Link>
        </div>
      </div>
    </div>
  );
}
