// netlify/functions/payment-callback.js
export async function handler(event, context) {
  try {
    // Hubtel sends callbacks as POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    // Parse the callback body
    const body = JSON.parse(event.body);

    console.log("📨 Hubtel Callback Received:", body);

    // Example Hubtel callback fields:
    // {
    //   "ResponseCode": "0000",
    //   "ResponseMessage": "Transaction successful",
    //   "TransactionId": "123456789",
    //   "Amount": 10,
    //   "Channel": "mtn-gh",
    //   "CustomerMsisdn": "233XXXXXXXXX",
    //   "ClientReference": "order-1693849329329",
    //   "Description": "Payment of GHS 10",
    //   "Status": "Success"
    // }

    // ✅ Check if payment succeeded
    if (body.Status === "Success" || body.ResponseCode === "0000") {
      console.log("✅ Payment success:", body.TransactionId);
      // TODO: Update your DB or order status here
    } else {
      console.log("❌ Payment failed:", body.ResponseMessage);
      // TODO: Handle failed payments
    }

    // Always reply with 200 so Hubtel knows we received it
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Callback received successfully" }),
    };
  } catch (error) {
    console.error("❌ Callback error:", error.message, error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Callback processing failed" }),
    };
  }
}
