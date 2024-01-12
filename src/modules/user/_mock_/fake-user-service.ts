import { IUserService } from "../service/user-service.interface";
import { fakeUser, fakeUsersArray } from "./fake-user-model";

export const fakeUserService = {
   getAll() {
      return Promise.resolve(fakeUsersArray);
   },
   getById() {
      return Promise.resolve(fakeUser);
   },
   getByEmail() {
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
} as unknown as IUserService;
