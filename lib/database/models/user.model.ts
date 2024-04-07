import { Schema, model, models } from "mongoose";

const InfluencerSchema = new Schema(
  {
    influencerId: String,
    images: [{ type: String }],
  },
  { _id: false }
);

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  planId: {
    type: Number,
    default: 0,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
  influencers: [InfluencerSchema],
});

const User = models?.User || model("User", UserSchema);

export default User;
