export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role?: "user" | "admin";
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}