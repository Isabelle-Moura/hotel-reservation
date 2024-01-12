import { Model } from "mongoose";
import { User } from "../model/user-model";

export const fakeUserModel = {
   find: jest.fn().mockImplementation(() => fakeUsersArray),
   findOne: jest.fn().mockImplementation(() => fakeUser),
   create: jest.fn().mockImplementation(() => fakeUser),
   findByIdAndUpdate: jest.fn().mockImplementation(() => fakeUser),
} as unknown as Model<User>;

export const fakeUsersArray = [
   { _id: "65725f4f264acb30ac7a881f", name: "Lucas", email: "lucas@arnia.com", password: "admin", reservations: [], deletedAt: null },
   { _id: "65725f4f264acb30ac7a8820", name: "Victor", email: "victor@arnia.com", password: "admin2", reservations: [], deletedAt: null },
   { _id: "65725f4f264acb30ac7a8821", name: "Alberto", email: "alberto@arnia.com", password: "admin3", reservations: [], deletedAt: null },
];

export const fakeUser = fakeUsersArray[0];
