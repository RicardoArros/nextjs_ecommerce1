import Product from "../../models/Product";
import User from "../../models/User";

import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
  // Connect to the db
  await db.connect();

  //
  await User.deleteMany();
  await User.insertMany(data.users);

  //
  await Product.deleteMany();
  await Product.insertMany(data.products);

  // Disconnect from the db
  await db.disconnect();
  
  res.send({ message: "seeded successfully" });
};
export default handler;
