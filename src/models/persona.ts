export class Contact {

  id?: number;
  name: string;
  surname: string;
  dni: string;
  age: any;
  birthday: any;
  color: string;
  gender: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.surname = "";
    this.dni = "";
    this.age = 0;
    this.birthday = "";
    this.color = "";
    this.gender = "";
  }
}
