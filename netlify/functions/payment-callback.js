export async function handler(event, context) {
  console.log("📩 Hubtel callback:", event.body);

  // Parse callback data
  const data = JSON.parse(event.body);

  // You can save this to a database, trigger notifications, etc.
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Callback received", data }),
  };
}
      "https://yourdomain.com/payment-callback"; // Change to your actual callback URL