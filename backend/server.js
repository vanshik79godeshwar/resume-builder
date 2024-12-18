const express = require("express");
const { requireAuth } = require("@clerk/clerk-sdk-node");

const app = express();
app.use(express.json());

app.get("/api/protected", requireAuth(), (req, res) => {
  const userId = req.auth.userId; // Unique Clerk user ID
  res.json({ message: `Hello, user ${userId}!` });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
