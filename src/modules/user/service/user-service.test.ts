import { fakeUsersArray, fakeUser } from "../_mock_/fake-user-model";
import { fakeUserRepository } from "../_mock_/fake-user-repository";
import { UserService } from "./user.services";

const userService = new UserService(fakeUserRepository);

describe("UserService", () => {
   describe("getAll", () => {
      it("Should return an array of users", async () => {
         const users = await userService.getAll();
         expect(users).toEqual(fakeUsersArray);
      });

      it("Should return an error if no user is found", async () => {
         jest.spyOn(fakeUserRepository, "getAll").mockResolvedValueOnce([]);
         await expect(userService.getAll()).rejects.toThrow("Users not found.");
      });
   });

   describe("getByEmail", () => {
      it("Should return an user", async () => {
         const user = await userService.getByEmail(fakeUser.email);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found", async () => {
         jest.spyOn(fakeUserRepository, "getByEmail").mockResolvedValueOnce(null);
         await expect(userService.getByEmail("batata@potato.com")).rejects.toThrow("User not found.");
      });
   });

   describe("getById", () => {
      it("Should return an user", async () => {
         const user = await userService.getById(fakeUser._id);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found", async () => {
         jest.spyOn(fakeUserRepository, "getById").mockResolvedValueOnce(null);
         await expect(userService.getById("50")).rejects.toThrow("User not found.");
      });
   });

   describe("create", () => {
      it("Should return an user", async () => {
         const user = await userService.create(fakeUser);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if not able to create user", async () => {
         jest.spyOn(fakeUserRepository, "create").mockResolvedValueOnce(null);
         await expect(userService.create(fakeUser)).rejects.toThrow("Cannot create user.");
      });
   });

   describe("update", () => {
      it("Should return an user", async () => {
         const user = await userService.update(fakeUser._id, fakeUser);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if not able to update user", async () => {
         jest.spyOn(fakeUserRepository, "update").mockResolvedValueOnce(null);
         await expect(userService.update(fakeUser._id, fakeUser)).rejects.toThrow("Cannot update user.");
      });
   });

   describe("softDelete", () => {
      it("Should return an user", async () => {
         const user = await userService.softDelete(fakeUser._id);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if not able to delete user", async () => {
         jest.spyOn(fakeUserRepository, "softDelete").mockResolvedValueOnce(null);
         await expect(userService.softDelete(fakeUser._id)).rejects.toThrow("Cannot delete user.");
      });
   });
});
