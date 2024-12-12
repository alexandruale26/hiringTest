export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type TableRow = Pick<User, "id" | "name" | "username" | "email" | "phone" | "website"> & {
  cityName: User["address"]["city"];
  companyName: User["company"]["name"];
};
