import Product from "../../../models/Product";
import db from "../../../utils/db";

// This funct create an api to get the product from backend in the mongo db,
// base on the id in the url.
const handler = async (req, res) => {
  // Connect to the db
  await db.connect();

  // Get the product in the db using findById method and using id in the url
  const product = await Product.findById(req.query.id);

  // Disconnect from the db
  await db.disconnect();

  // Return the product to the frontend
  res.send(product);
};

export default handler;
