import { kv } from "@vercel/kv";

// Replace these environment variables with your own
const KV_URL = process.env.KV_URL;
const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;
const KV_REST_API_READ_ONLY_TOKEN = process.env.KV_REST_API_READ_ONLY_TOKEN;
const EDAMAM_API_KEY = process.env.EDAMAM_API_KEY;

// Initialize the KV client
const kvClient = kv({
  url: KV_URL,
  namespace: "<namespace-key>",
});

// Function to populate the KV database with data from Edamam API
async function populateKVDatabase() {
  // Example URL for Edamam API
  const apiUrl = `https://api.edamam.com/search?q=test&app_id=782a8c61&app_key=${EDAMAM_API_KEY}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error fetching data from Edamam API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Assuming the response contains the desired data
    await kvClient.set("edamam_data", JSON.stringify(data));
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating the database:", error);
  }
}

// Call the function with your Edamam API key
populateKVDatabase().then(() => {
  console.log("Finished populating the database.");
});

export default kvClient;