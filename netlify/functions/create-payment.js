export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, phoneNumber, provider } = JSON.parse(event.body);

    // Map frontend provider to Hubtel provider codes
    const providerMap = {
      mtn: "mtn-gh",
      airteltigo: "airteltigo-gh",
      telecel: "vodafone-gh",   // Telecel = Vodafone Ghana
      vodafone: "vodafone-gh",  // optional alias
    };

    const providerCode = providerMap[provider];
    if (!providerCode) {
      console.error("❌ Unsupported provider:", provider);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Unsupported provider", provider }),
      };
    }

    // Debug: log request going to Hubtel
    console.log("📦 Payment request:", {
      amount,
      phoneNumber,
      provider,
      mappedProvider: providerCode,
    });

    // Prepare Basic Auth header
    const credentials = Buffer.from(
      `${process.env.HUBTEL_API_ID}:${process.env.HUBTEL_API_KEY}`
    ).toString("base64");

    const response = await fetch(
      "https://payproxyapi.hubtel.com/merchantaccount/onlinecheckout/initiate",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          description: "Order payment",
          clientReference: "order-" + Date.now(),
          customerMsisdn: phoneNumber,   // must be in 233xxxxxxxxx format
          provider: providerCode,
          primaryCallbackUrl: "https://webhook.site/your-test-id", // temporary for testing
        }),
      }
    );

    // Read safely: try JSON, otherwise return text
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
    console.error(" Payment error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Payment initiation failed",
        details: error.message,
      }),
    };
  }
}
