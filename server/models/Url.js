import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  url: String,
});

export default mongoose.model("Url", UrlSchema);
