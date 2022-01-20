export interface Person {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
  firstname: string;
  lastname: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address_street: string;
  address_city: string;
  address_state: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  children: Person[];
}
