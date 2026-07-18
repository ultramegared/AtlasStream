export interface Subscription {
  id?: string;
  name: string;
  price: number;
  currency: string;
  active: boolean;
  expiresAt?: Date;
}