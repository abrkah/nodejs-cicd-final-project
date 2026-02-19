const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("CI/CD Final Project Running!");
});

// Only start server if this file is run directly
if (require.main === module) {
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;
