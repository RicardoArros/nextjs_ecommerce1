import mongoose from "mongoose";

//
const connection = {};

//
async function connect() {
  if (connection.isConected) {
    console.log("already connected");

    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConected = mongoose.connections[0].readyState;

    if (connection.isConected === 1) {
      console.log("use previous connection");

      return;
    }

    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);

  console.log("new connection");

  connection.isConected = db.connections[0].readyState;
}

//
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconnect };

export default db;
