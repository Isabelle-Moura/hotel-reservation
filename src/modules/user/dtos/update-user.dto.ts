export class UpdateUserDTO {
   name?: string;
   email?: string;
   password?: string;
   reservations?: string[];

   constructor(userData?: UpdateUser) {
      this.name = userData?.name;
      this.email = userData?.email;
      this.password = userData?.password;
      this.reservations = userData?.reservations;
   }
}

type UpdateUser = {
   name?: string;
   email?: string;
   password?: string;
   reservations?: string[];
};
