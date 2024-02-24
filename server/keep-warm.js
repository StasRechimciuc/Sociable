import fetch from "node-fetch";

const endpoints = [
  "https://sociable-demo.onrender.com/login",
  "https://sociable-demo.onrender.com/getUser",
];

const makeRequests = async () => {
  try {
    for (const endpoint of endpoints) {
      const response = await fetch(endpoint, {
        method: "GET",
        headers:
          endpoint === "https://sociable-demo.onrender.com/login"
            ? {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              }
            : {
                Authorization: `Bearer ${token}`,
              },
        body: JSON.stringify(
          endpoint === "https://sociable-demo.onrender.com/login"
            ? { email: "demo@example.com", password: "demo" }
            : { id: "65c3b0798b5fb24572fe1527" }
        ),
      });
      const data = await response.json();
      console.log(`Request to ${endpoint} successful.`);
    }
  } catch (error) {
    console.error(`Error making requests: ${error.message}`);
  }
};

// Run every 10 hours
const intervalInMilliseconds = 10 * 60 * 60 * 1000;
setInterval(makeRequests, intervalInMilliseconds);
