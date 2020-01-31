import { Transaction } from './transaction';

export interface Customer {
  id: string;
  name: string;
  transactions: Array<Transaction>;
  points: number;
}
