export interface ISale {
  customer: string;
  products: string[];
  total: string;
  isPaid: boolean | string;
  createdAt: string;
}
