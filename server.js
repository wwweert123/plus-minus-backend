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

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/root"));
app.use("/plus-minus", require("./routes/api/plus-minus"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
