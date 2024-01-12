import { CreateUserDTO } from "../dtos/create-user.dto";
import { UpdateUserDTO } from "../dtos/update-user.dto";
import { User } from "../model/user-model";
import { IUserRepository } from "../repository/user-repository.interface";
import { IUserService } from "./user-service.interface";

export class UserService implements IUserService {
   constructor(private userRepository: IUserRepository) {}

   async getAll(): Promise<User[]> {
      const users = await this.userRepository.getAll();

      if (!users || users.length === 0) {
         throw new Error("Users not found.");
      }

      return users;
   }

   async getByEmail(email: string): Promise<User> {
      const user = await this.userRepository.getByEmail(email);

      if (!user) {
         throw new Error("User not found.");
      }

      return user;
   }

   async getById(id: string): Promise<User> {
      const user = await this.userRepository.getById(id);

      if (!user) {
         throw new Error("User not found.");
      }

      return user;
   }

   async create(userData: CreateUserDTO): Promise<User> {
      const newUser = await this.userRepository.create(userData);

      if (!newUser) {
         throw new Error("Cannot create user.");
      }

      return newUser;
   }

   async update(id: string, newUserData: UpdateUserDTO): Promise<User> {
      const user = await this.userRepository.getById(id);

      if (!user) {
         throw new Error("User not found.");
      }

      const updatedUser = await this.userRepository.update(id, newUserData);

      if (!updatedUser) {
         throw new Error("Cannot update user.");
      }

      return user;
   }

   async softDelete(id: string): Promise<User> {
      const user = await this.userRepository.getById(id);

      if (!user) {
         throw new Error("User not found.");
      }

      const deletedUser = await this.userRepository.softDelete(id);

      if (!deletedUser) {
         throw new Error("Cannot delete user.");
      }

      return deletedUser;
   }
}
