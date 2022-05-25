// import exp from "constants";
import { type } from "os";

export interface User {
  cell: string;
  dob: { age: number; date: string };
  email: string | null;
  gender: string;
  id: { name: string; value: string };
  loaction: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: number;
    state: string;
  };
  street: { name: string; number: number };
  timezone: { desription: string; offset: string };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: { first: string; last: string; title: string };
  nat: string;
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
  register: {
    age: number;
    date: string;
  };
}

export type Props = {
  user: User | null;
};

// export const Url = "https://randomuser.me/api";