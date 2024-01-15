const app = require("./app");
const mongoConect = require("./db/conection");

const { PORT } = process.env;

const startServer = async () => {
  try {
    await mongoConect();
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
