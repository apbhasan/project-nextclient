import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String, // hashed if you implement credentials signup
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
