export interface User {
  id: string;
  username: string;
  email: string;

  firstName?: string;
  lastName?: string;
  avatar?: string;

  subscriptionId?: string;

  favorites?: string[];
  continueWatching?: string[];
  downloads?: string[];

  createdAt?: string;
  updatedAt?: string;
}