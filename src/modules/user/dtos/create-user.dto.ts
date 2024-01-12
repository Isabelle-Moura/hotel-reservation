export class CreateUserDTO {
   name: string;
   email: string;
   password: string;
   reservations: string[];

   constructor(userData: CreateUser) {
      this.name = userData.name;
      this.email = userData.email;
      this.password = userData.password;
      this.reservations = userData?.reservations;
   }
}

type CreateUser = {
   name: string;
   email: string;
   password: string;
   reservations: string[];
};
