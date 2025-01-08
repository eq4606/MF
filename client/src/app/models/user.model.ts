export type UserRole = 'manager' | 'guest';

export class User {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  constructor(id: string, name: string, email: string, role: UserRole) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}