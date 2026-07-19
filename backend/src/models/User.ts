export interface User {
  id?: string;

  username: string;

  email: string;

  password: string;

  firstName?: string;

  lastName?: string;

  profileImage?: string;

  roleId?: string;

  countryId?: string;

  languageId?: string;

  phone?: string;

  birthDate?: Date;

  isActive?: boolean;

  isVerified?: boolean;

  emailVerifiedAt?: Date;

  lastLoginAt?: Date;

  passwordChangedAt?: Date;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}