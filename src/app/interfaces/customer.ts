import { Transaction } from './transaction';

export interface Customer {
  id: number;
  name: string;
  transactions: Array<Transaction>;
  points: number;
}
