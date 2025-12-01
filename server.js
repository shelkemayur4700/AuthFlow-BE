const app = require("./src/app");
const dotenv = require("dotenv");
const connectDB = require("./src/app/utils/db");
dotenv.config();
const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("SERVER ERROR", error));
