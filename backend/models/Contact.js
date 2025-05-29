import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   subject: {
      type: String,
      unique: true
   },

   message: {
      type: String,
      required: true,
   },
     phone: {
      tupe:String
     },

   createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("contact", contactSchema);
