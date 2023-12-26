import mongoose, { Schema } from "mongoose";

const documentSchema = Schema({
  _id: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

export const Document = mongoose.model("Document", documentSchema);
