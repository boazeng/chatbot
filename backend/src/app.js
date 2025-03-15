// Entry point for the chatbot backend
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Priority Chatbot API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
