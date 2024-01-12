import { InferSchemaType, Schema, Model, model, Types } from "mongoose";

const userSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      reservations: [
         {
            type: Types.ObjectId,
            ref: "Reservation",
         },
      ],
      deletedAt: {
         type: Date,
         default: null,
      },
   },
   {
      timestamps: true,
   }
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel: Model<User> = model("User", userSchema);
