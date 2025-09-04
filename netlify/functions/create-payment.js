export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, phoneNumber, provider, customerName, customerEmail } =
      JSON.parse(event.body);

    // ✅ Validate phone number (must be in 233xxxxxxxxx format)
    if (!/^233\d{9}$/.test(phoneNumber)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Phone number must start with 233 and be 12 digits long",
          phoneNumber,
        }),
      };
    }

    // ✅ Map frontend provider to Hubtel provider codes
    const providerMap = {
      mtn: "mtn-gh",
      airteltigo: "airteltigo-gh",
      telecel: "vodafone-gh", // Telecel = Vodafone Ghana
      vodafone: "vodafone-gh",
    };

    const providerCode = providerMap[provider];
    if (!providerCode) {
      console.error("❌ Unsupported provider:", provider);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Unsupported provider", provider }),
      };
    }

    // ✅ Debug log
    console.log("📦 Payment request:", {
      amount,
      phoneNumber,
      provider,
      mappedProvider: providerCode,
    });

    // ✅ Prepare Basic Auth header
    const credentials = Buffer.from(
      `${process.env.HUBTEL_API_ID}:${process.env.HUBTEL_API_KEY}`
    ).toString("base64");

    // ✅ Use Receive Payment API
    const url = `https://rmp.hubtel.com/merchantaccount/merchants/${process.env.HUBTEL_MERCHANT_ID}/receive/mobilemoney`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CustomerName: customerName || "Anonymous",
        CustomerMsisdn: phoneNumber,
        CustomerEmail: customerEmail || "noemail@example.com",
        Channel: providerCode,
        Amount: amount,
        PrimaryCallbackUrl: "https://webhook.site/your-test-id", // 🔄 replace with your real callback later
        Description: `Payment of GHS ${amount}`, // ✅ dynamic description
        ClientReference: "order-" + Date.now(),
      }),
    });

    // ✅ Read response safely
    const text = await response.text();
    console.log("📨 Hubtel raw response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("❌ Payment error:", error.message, error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Payment initiation failed",
        details: error.message,
      }),
    };
  }
}
