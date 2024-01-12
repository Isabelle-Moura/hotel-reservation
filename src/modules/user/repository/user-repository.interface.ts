import { User } from "../model/user-model";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UpdateUserDTO } from "../dtos/update-user.dto";

export interface IUserRepository {
   getAll(): Promise<Array<User>>;

   getByEmail(email: string): Promise<User | null>;

   getById(id: string): Promise<User | null>;

   create(userData: CreateUserDTO): Promise<User | null>;

   update(id: string, newUserData: UpdateUserDTO): Promise<User | null>;

   softDelete(id: string): Promise<User | null>;
}
