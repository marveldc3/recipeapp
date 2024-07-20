import { kv } from "@vercel/kv";

// Replace these credentials with your own
const KV_URL = "redis://default:AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI@helping-reptile-47272.upstash.io:6379";
const KV_REST_API_URL = "https://helping-reptile-47272.upstash.io";
const KV_REST_API_TOKEN = "AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI";
const KV_REST_API_READ_ONLY_TOKEN = "ArioAAIgcDGeufx99Rtue4ELgOuxJHl2Ao2Ia9lbETKf9T3JFokPdg";

// Initialize the KV client
const kvClient = kv({
  url: KV_URL,
  namespace: "<namespace-key>",
  restApi: {
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
    readOnlyToken: KV_REST_API_READ_ONLY_TOKEN,
  },
});

// Function to populate the KV database with data from Edamam API
async function populateKVDatabase(apiKey: string) {
  // Example URL for Edamam API
  const apiUrl = `https://api.edamam.com/search?q=test&app_id=782a8c61&app_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Assuming the response contains the desired data
    await kvClient.kv.set("edamam_data", JSON.stringify(data));
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating the database:", error);
  }
}

// Call the function with your Edamam API key
const EDAMAM_API_KEY = "a1942b18ea7db3be941b03c4050b6b85";
populateKVDatabase(EDAMAM_API_KEY).then(() => {
  console.log("Finished populating the database.");
});

export default kvClient;