import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect("");
    console.log(
      "MONGODB connected!!! DB HOST: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection FAILED!!! ", error?.message);
  }
};

export default connectDB;
