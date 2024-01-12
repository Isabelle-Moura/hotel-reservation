import { IUserRepository } from "../repository/user-repository.interface";
import { fakeUser, fakeUsersArray } from "./fake-user-model";

export const fakeUserRepository = {
   getAll() {
      return Promise.resolve(fakeUsersArray);
   },

   getByEmail() {
      return Promise.resolve(fakeUser);
   },

   getById() {
      return Promise.resolve(fakeUser);
   },

   create() {
      return Promise.resolve(fakeUser);
   },

   update() {
      return Promise.resolve(fakeUser);
   },

   softDelete() {
      return Promise.resolve(fakeUser);
   },
} as unknown as IUserRepository;
