const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

// Options for CORS
app.use(cors(corsOptions));

// built-in middleware for json
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
