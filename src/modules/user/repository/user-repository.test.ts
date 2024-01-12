import { fakeUserModel, fakeUsersArray, fakeUser } from "../_mock_/fake-user-model";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository(fakeUserModel);

describe("UserRepository", () => {
   describe("getAll", () => {
      it("Should return a array of users", async () => {
         const users = await userRepository.getAll();
         expect(users).toEqual(fakeUsersArray);
      });

      it("Should call the find method from the user model", async () => {
         await userRepository.getAll();
         expect(fakeUserModel.find).toHaveBeenCalled();
      });
   });

   describe("getByEmail", () => {
      it("Should return a user with the same email passed as argument", async () => {
         const user = await userRepository.getByEmail(fakeUser.email);
         expect(user).toEqual(fakeUser);
      });
   });

   describe("getById", () => {
      it("Should return a user with the same id passed as argument", async () => {
         const user = await userRepository.getById(fakeUser._id);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if the id is not valid", async () => {
         await expect(userRepository.getById("1")).rejects.toThrow(`Id 1 is not valid.`);
      });
   });

   describe("create", () => {
      it("Should return an user", async () => {
         const user = await userRepository.create(fakeUser);
         expect(user).toEqual(fakeUser);
      });
   });

   describe("update", () => {
      it("Should return an user", async () => {
         const user = await userRepository.update(fakeUser._id, fakeUser);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if the id is not valid", async () => {
         await expect(userRepository.update("1", fakeUser)).rejects.toThrow(`Id 1 is not valid.`);
      });
   });

   describe("softDelete", () => {
      it("Should return an user", async () => {
         const user = await userRepository.softDelete(fakeUser._id);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if the id is not valid", async () => {
         await expect(userRepository.softDelete("1")).rejects.toThrow(`Id 1 is not valid.`);
      });
   });
});
