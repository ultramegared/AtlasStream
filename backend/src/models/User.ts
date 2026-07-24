export interface User {
  id?: string;

  username: string;

  email: string;

  password: string;

  firstName?: string;

  lastName?: string;

  avatar?: string;

  role?: string;

  isActive?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}