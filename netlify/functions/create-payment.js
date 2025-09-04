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
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Unsupported provider", provider }),
      };
    }

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
          customerMsisdn: phoneNumber,   // 👈 user phone with 233 prefix
          provider: providerCode,        // 👈 mapped provider
          primaryCallbackUrl: "https://webhook.site/your-test-id", // replace with your real webhook later
        }),
      }
    );

    const data = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Payment error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Payment initiation failed" }),
    };
  }
}
