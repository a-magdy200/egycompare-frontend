export interface Branch {
  address: string;
  phone: string | string[];
}
export interface Store {
  id: number;
  logo: string;
  cover: string;
  email: string;
  name: string;
  branches: Branch[];
}
