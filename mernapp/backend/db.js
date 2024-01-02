const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://sarveshchaurasia007:OnqzuVm1565Bp3a6@spoonsafari.qj9yzx9.mongodb.net/spoonsafarimern?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // Connection successful, proceed with data retrieval
    const fetchedData = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const foodCategory = await mongoose.connection.db
      .collection("food_category")
      .find({})
      .toArray();
    global.food_category = foodCategory;
    global.food_items = fetchedData;
    // console.log(fetchedData);
  } catch (error) {
    // Handle connection or data retrieval errors
    console.error(error);
  }
};
module.exports = connectToMongo;
