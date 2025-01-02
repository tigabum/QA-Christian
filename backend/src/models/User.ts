import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  uid: string;
  email: string;
  displayName: string;
  role: "user" | "responder";
  profilePicture?: string;
  profession?: string;
  academicAchievements?: string[];
  denomination?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    role: { type: String, enum: ["user", "responder"], default: "user" },
    profilePicture: { type: String },
    profession: { type: String },
    academicAchievements: [{ type: String }],
    denomination: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", userSchema);
