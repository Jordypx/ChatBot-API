require("dotenv").config();

const cleverbot = require("cleverbot-free"),
  express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const response = await cleverbot(message);
  res.json({
    response: response,
  });
});

const port = process.env.PORT || 8000; // Use port 8000 if PORT is not defined in .env

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
