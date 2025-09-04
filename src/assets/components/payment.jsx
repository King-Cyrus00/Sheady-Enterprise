import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { Shield, Smartphone } from "lucide-react";
import Mtn from "../../assets/images/mtn1.png";
import Telecel from "../../assets/images/telecel.png";
import AirtelTigo from "../../assets/images/at.png";

const PaymentPage = () => {
  const [orderData, setOrderData] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("mtn");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderData");
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
  }, []);

  // Notification system
  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const paymentMethods = [
    {
      id: "mtn",
      name: "MTN MoMo",
      image: Mtn,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: "telecel",
      name: "Telecel Cash",
      image: Telecel,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: "airteltigo",
      name: "AirtelTigo Cash",
      image: AirtelTigo,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length !== 9) {
      showNotification("error", "Invalid Phone Number", "Please enter a valid 9-digit phone number");
      return;
    }

    setLoading(true);
    showNotification("info", "Processing Payment", "Sending payment request to your phone...");

    try {
      const res = await fetch("/.netlify/functions/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: subtotal + 10, // total with delivery
          phoneNumber: "233" + cleanPhone, // Hubtel expects country code
          provider: selectedMethod, // mtn, airteltigo, telecel
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setLoading(false);
        showNotification("success", "Payment Request Sent", "Check your phone and approve the transaction.");
      } else {
        setLoading(false);
        showNotification("error", "Payment Failed", data?.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      showNotification("error", "Error", "Failed to connect to payment server");
    }
  };


  const cartItems = orderData?.cartItems || [];
  const subtotal = orderData?.subtotal || 0;


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8 lg:px-16 font-montserrat">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 max-w-sm w-full z-50 transform transition-all duration-300 ${notification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
          <div className={`rounded-lg shadow-lg p-4 flex items-start gap-3 ${notification.type === 'success' ? 'bg-green-50 border border-green-200' :
            notification.type === 'error' ? 'bg-red-50 border border-red-200' :
              'bg-blue-50 border border-blue-200'
            }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${notification.type === 'success' ? 'bg-green-500' :
              notification.type === 'error' ? 'bg-red-500' :
                'bg-blue-500'
              }`}>
              <span className="text-white text-xs font-bold">
                {notification.type === 'success' ? '✓' : notification.type === 'error' ? '!' : 'i'}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
              <p className="text-xs text-gray-600 mt-0.5">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors duration-200 group"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center group-hover:shadow-md transition-shadow">
            <FaArrowLeft className="w-4 h-4" />
          </div>
          <span>Back to Cart</span>
        </button>

        {/* Security Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Secured by Hubtel • 256-bit SSL Encryption</span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left: Payment Options */}
            <div className="p-8 border-r border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-[#1b5059]" />
                <h2 className="text-2xl font-semibold text-gray-900">Mobile Money Payment</h2>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">Choose Mobile Money Provider</label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedMethod === method.id
                          ? `${method.borderColor} ${method.bgColor} border-[#1b5059]`
                          : "border-gray-200 hover:border-gray-300"
                          }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={selectedMethod === method.id}
                          onChange={() => setSelectedMethod(method.id)}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-3 flex-1">
                          <img
                            src={method.image}
                            alt={method.name}
                            className="w-10 h-10 rounded-lg object-contain"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{method.name}</p>
                            <p className="text-xs text-gray-500">Instant payment</p>
                          </div>
                        </div>
                        {selectedMethod === method.id && (
                          <FaCheckCircle className="w-5 h-5 text-[#1b5059]" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mobile Money Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm font-medium">+233</span>
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={12}
                      placeholder="24 123 4567"
                      className="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b5059] focus:border-transparent outline-none text-lg"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the number registered with your {paymentMethods.find(m => m.id === selectedMethod)?.name} account
                  </p>
                </div>

                {/* Payment Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">i</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-900">Payment Process</p>
                      <p className="text-xs text-blue-700 mt-1">
                        After clicking "Pay Now", you'll receive a prompt on your phone.
                        Enter your PIN to authorize this payment.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !phone}
                  className="w-full bg-[#1b5059] text-white py-3.5 rounded-lg font-semibold hover:bg-[#164a52] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>Pay GHS {(subtotal + 10).toFixed(2)}</>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Order Summary */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-[#ec8733]">
                      GH₵{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>GH₵{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>GH₵10.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900 text-lg border-t border-gray-200 pt-2">
                    <span>Total</span>
                    <span>GH₵{(subtotal + 10).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;