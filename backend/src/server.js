require("dotenv").config();
const app = require("./app");
const config = require("./config/env");

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`   Environment : ${config.nodeEnv}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
  console.log(`   API base    : http://localhost:${PORT}/api\n`);
});
