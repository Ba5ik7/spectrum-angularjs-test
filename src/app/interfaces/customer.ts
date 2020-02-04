import { Transaction } from './transaction';

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone:string;
  transactions: Array<Transaction>;
  points: number;
}
